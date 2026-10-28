# Providers
Generally cloud-solutions will preform better than any local model*, assuming you have access to a **paid** plan with one of them:
- Anthropic:
	- Sonnet 5
		- The 'defualt'
		- Fine for chatting with, but awful at work
		- Use 4.6/4.7 if you can
	- Opus 5
		- Generally the best overall for programming tasks
		- Somehow a tiny version of Fable
		- Likes to fall into circles, wasting tokens
		- Would prefer 4.8 if you can get it
	- Fable 5/5.1
		- Best in class
		- Expensive as fuck
		- Not included on the $20 plan
	- Anthropic models seem to use way more tokens (and therefore sub usage) than every other model option. $20 plan will work, but limits will be hit quick
- OpenAI:
	- Astra
		- Best OpenAI model, and reasonably better price-to-token than Fable
		- *IS* available at the $20 tier
		- Handles model swarms well (though this is expensive)
	- GPT-5.6
		- Three versions: `sol, terra, luna`
			- Sol - best for programming/model orchestration
			- Terra - honestly has no 'specific use case' that makes it better/worse than the others
			- Luna - cheaper, still performant and strong. Better for sub-agents or API system callers
	- GPT-5.4 (specifically nano)
		- Nano is their cheapest model w/ reasoning
		- Very cheap
		- Best for API calls for specific applications
			- I used this in my resume app, but switched to 5.6-luna for OCR
	- As of this moment, OpenAI seems to have the best subscription model, the $20 tier is very generous, and they system to giving you resets as something you can use when you need is very nice
	- API platform is really easy to use, and their the ones leading the endpoint design system for AI models
- Gemini:
	- Not very good at UI/UX
	- Has the best research/search algorithm of any
	- Cheap as hell
- Meta
	- Muse-class models are solid, but not class-leading
	- Pricing is cheap *only* if you are willing to let Meta train on your prompts, however normal pricing is unrealistic and gets mogged by OpenAI/Anthropic
		- ![[Pasted image 20260908110730.png]]
## Local Models
I have some experience with local models & harnesses. Generally the for-profit, cloud models are technically better that local models in most applications. However there are some use cases for local models that work well:
- Basic chat model
- Sub-agent workers driving by a cloud model
- Scraping/Searching for patterns or words in some context
The benefit of local models is that, once you have the hardware, the costs fall to just electricity. So, but this point, local models usually become cheaper than cloud models.

The best way to run the better versions of these models is to have a device with a lot of VRAM (or basically GPU ram), so this either means running multiple GPUs or having a deceive with unified memory. The best entry point to that is a MAC computer with an M-series processor.

Models I've played with:
- gemma 4
- qwen-3
- glm 5.2 (heavily quantized)
### Local harnesses
Generally Ollama or similar will run your local model, but you cannot do much with it there without passing it into a harness:
- OpenCode
	- Seems to work, but requires a lot of setup
	- Limited model compatibility
	- Doesn't ship with tools out of the box
- Claude Code
	- Even though its semi-proprietary, it has been given a hacky solution to make this work
	- Most a plug-and-play solution
- Hermes
	- This is more of an automatous agent harness, and requires instructions and setup to get to work
- OpenClaw
	- This is more of an automatous agent harness, and requires instructions and setup to get to work

# Skills/Plugins/MCPs
It is generally best to use skills when needed in your project. Models today are pretty smart and can use not only file read/write but screenshotting and mouse inputs to verify and test their solutions. You can use these to build specific skills to assist in agentic-supported development.
- For instance, I've written various verify-code skills that tell a model how to run a project, then screenshot it to verify their design
- In some instances, a better model has decided on its own to make a skill to help smaller models

Plugins & MCP servers are another way to give models more power. I've played with a few that I like:
- Find skills (Vercel)
	- A skill/plugin that allows a model to search and install its own skills as needed
	- https://www.skills.sh/vercel-labs/skills/find-skills
- Superpowers
	- Turns AI implementation into full TDD development
		- Works with you to build a spec, then builds the plan out of that
		- Can then use multi-sub-agents to implement (powered by worktrees)
		- Will then review all code after each step, and at the end
	- Also comes with debugging and mocking up skills to further help fix and develop ideas
	- https://github.com/obra/superpowers
- CodeGraph
	- MCP server that indexes code and builds a map that supports finding code snippets faster and cheaper for your model
		- Removes model's reliance on grepping a bunch
	- Local MCP run from your computer
	- https://github.com/colbymchenry/codegraph
- Ponytail
	- Imagine a 'senior' level code reviewer/implementor
	- This plugin stops your model from writing overly complex code and provides auditing tools to support code cleanup efforts
	- Can be expensive at times, as it fires of many sub-agents
	- https://github.com/dietrichgebert/ponytail
- Security Audit Skills
	- Very useful for finding security vulnerabilities in code
	- Way easier to have a model do this than a human
		- Human can then fix the problem
	- Better version ships in Claude Code, but its closed source
	- https://github.com/pors/skill-audit

# Agent Coding Platforms
## Claude Code
- Terminal Based
- Seeming the version Anthropic uses
	- Desktop app is bad - AVOID
- Simple, and can be used by other models
## Codex
- GUI tool
- Nice system for managing prs, commits, and branches
- Is now directly part of the ChatGPT app itself, not a separate thing
	- RIP
## Antigravity
- Google's offering
- VScode clone
- Honestly really awful - AVOID
- Do also have a terminal version that is a Claude Code clone
## Cursor
- Personally haven't tried
- The original one of these per-say
- Have their own sub that grants access to most providers & their own models
- IDK man its owned by SpaceXAI now so.....
## T3 Code
- This is more like a harness for your harnesses
	- It uses claude code, codex, antigravity cli, etc under the hood
	- GUI wrapper
- Bring a bunch of features to the table the others don't have (or has done better):
	- Multi-provider support is easy
	- Model switching made simple as context is cached and simplified
	- Setup projects, then threads within projects
	- Kicks finished/needs input threads to the top of the sidebar
	- Heavily customizable and open-source
	- Nice diff screen, app preview, and branching controls built in
	- Direct terminal access if needed
- Seems like the mix between VScode and Codex
## CMUX
- Tmux terminal but for agents
- MACOS and Linux only
- Works like T3 code, but as a terminal solution
- Seems best designed for Claude Code or other cli-based tools
- Built ontop of Ghostty


# TLDR
AI is now part of the Software Development toolkit, and its fairly important we understand how to use it as best as possible, but also in a way where we are still in control. I've played with a lot of models and tools, and have ended up with this current collection:

- Gemini Plus (student 1 year promo)
- Anthropic Pro Plan (1.5 years won for free @ Nexhacks)
- OpenAI Plus (student 4 month promo)
- Github Copilot (Student access plan)
- Ollama with gemma 4 & qwen-3-coder (local)
- Running primarily through t3 code, but I do also like Claude Code for simpler and quicker tasks
	- Copilot is only usable in github.com, github desktop, and vscode
- On MAC, I like to use cmux sometimes too

I follow Theo.gg & Ben Davis, & ThePrimeagen for updates in software engineering and AI
- Take anything from Theo and Ben with a grain of salt, both are very AI pilled
