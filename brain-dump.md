# Providers
Generally cloud-solutions will preform better than any local model*, assuming you have access to a **paid** plan with one of them:
- Anthropic:
	- Sonnet 5.5
		- The 'default'
		- Fine for chatting with, can do some basic work
        - Good sub-agent
	- Opus 5.5
		- Generally the best overall for programming tasks
		- Somehow a tiny version of Fable-ish
		- Cyber tasks generally prefer 4.8/4.7 if you can get it
	- Fable 5/5.1
		- Best in class
		- Expensive as fuck
		- Not included on the $20 plan
    - Haiku 5.5
      	- Better for text only tasks
      	- Can be delegated work by any of the above
      	- Good for AI integration into apps (like ResumeSmith)
      	- CHEAP
	- Anthropic models seem to use way more tokens (and therefore sub usage) than every other model option. $20 plan will work, but limits will be hit quick
- OpenAI:
	- Astra
		- Best OpenAI model, and reasonably better price-to-token than Fable
		- *IS* available at the $20 tier
		- Handles model swarms well (though this is expensive)
	- GPT-6.1 Sol
   		- My preferred default for coding tasks
       	- Good cost to performance ratio
       	- You basically don't need anything else for agentic coding
    - GPT-6.1 Terra
  		- Same as above, but cheaper and less intelligent
      	- Seems like a good backup for sub-agent work
    - GPT-6 Luna
        - Very cheap
        - Good API usage for apps
        - Might be usable as a simple task sub-agent
        - Good for chatGPT
	- GPT-5.6 (Legacy)
		- Three versions: `sol, terra, luna`
			- Sol - best for programming/model orchestration
			- Terra - honestly has no 'specific use case' that makes it better/worse than the others
			- Luna - cheaper, still performant and strong. Better for sub-agents or API system callers
	- As of this moment, OpenAI seems to have the best subscription model, the $20 tier is very generous, and they system to giving you resets as something you can use when you need is very nice
	- API platform is really easy to use, and their the ones leading the endpoint design system for AI models
- Gemini:
	- Not very good at UI/UX
	- Has the best research/search algorithm of any
	- Cheap as hell
  
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
	- This is more of an automatons agent harness, and requires instructions and setup to get to work
- OpenClaw
	- This is more of an automatons agent harness, and requires instructions and setup to get to work

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
	- Imagine a 'senior' level code reviewer/implementer
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
 - OV2
    - They made a new orchestrater setup that allows providers of one model to spawn agents of another
    - Easy context handoff
- Seems like the mix between VScode and Codex
## CMUX
- Tmux terminal but for agents
- MACOS and Linux only
- Works like T3 code, but as a terminal solution
- Seems best designed for Claude Code or other cli-based tools
- Built ontop of Ghostty

# Reasonable AI Creators/Experts You could watch:
- Theo (t3dotgg) - Might be knowledgeable sometimes, but is not my personal favorite anymore. He's really AI brained. T3code is fantastic though
- Ben Davis - seems to use AI less or at least more carefully than Theo. Is a svelte nerd so bonus points
- ThePrimeagen - Kinda the goat, will talk about any issue/topic. Has gone full into omarchy and grok though so :(.
- Fireship - quick, informative context with ridiculous sponsor spots at the end. Good for news and updates
- BigBoxSWE - a reasonable middle ground, seems to maybe actually have a software job perhaps
- Kai Lenit - pure comedy skits about the industry

# TLDR
AI is now part of the Software Development toolkit, and its fairly important we understand how to use it as best as possible, but also in a way where we are still in control.
