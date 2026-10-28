import { $typst } from '@myriaddreamin/typst.ts';

let initPromise: Promise<void> | null = null;
let initialized = false;

async function loadWasm(path: string): Promise<ArrayBuffer> {
	const response = await fetch(path);
	if (!response.ok) throw new Error(`Unable to load the PDF engine (${response.status}).`);
	return response.arrayBuffer();
}

export async function initCompiler(): Promise<void> {
	if (initialized) return;
	if (initPromise) return initPromise;

	initPromise = (async () => {
		try {
			$typst.setCompilerInitOptions({
				getModule: () => loadWasm('/typst_ts_web_compiler_bg.wasm'),
			});
			$typst.setRendererInitOptions({ getModule: () => loadWasm('/typst_ts_renderer_bg.wasm') });
			await $typst.pdf({ mainContent: '' });
			initialized = true;
		} catch (error) {
			initPromise = null;
			throw error;
		}
	})();

	return initPromise;
}

export async function compileToPdf(source: string): Promise<Uint8Array> {
	await initCompiler();
	const output = await $typst.pdf({ mainContent: source });
	if (!output) throw new Error('The PDF engine returned no data.');
	return output;
}

export async function compileToSvg(source: string): Promise<string> {
	await initCompiler();
	return $typst.svg({ mainContent: source });
}

export function downloadPdf(data: Uint8Array, filename: string): void {
	const blob = new Blob([data.buffer as ArrayBuffer], { type: 'application/pdf' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}
