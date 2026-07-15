import "clsx";
import { h as html } from "./html.js";
import { G as GitHubCard } from "./GitHubCard.js";
const metadata = {
  "title": "I Built LLMAO: A Faster LLM Orchestrator in Rust",
  "date": "2026-01-02",
  "description": "Started as a fix for rate limits. Ended up building something way faster than expected.",
  "tags": ["rust", "python", "llm", "opensource"]
};
const { title, date, description, tags } = metadata;
function Building_llmao_md($$renderer) {
  $$renderer.push(`<h1>I Built LLMAO</h1> <p>Okay, so let me tell you how this happened.</p> <h2>It Started with LiteLLM</h2> <p>A few weeks ago, I was digging through LiteLLM’s codebase. Found a config issue, <a href="https://github.com/BerriAI/litellm/pull/18284#issuecomment-3677708531" rel="nofollow">submitted a fix</a>. Nothing crazy, just wanted to help out.</p> <p>But that got me thinking.</p> <h2>The Real Problem</h2> <p>Here’s the thing. As a student, I use free tier API keys a lot. And so do my friends. We’re always hitting rate limits. Like, constantly.</p> <p>You know that feeling when you’re in the middle of working on something, and suddenly… <em>429 Too Many Requests</em>. Annoying, right?</p> <p>So we’d swap API keys manually. Or wait. Or just give up for the day.</p> <p>There had to be a better way.</p> <h2>Building LLMAO</h2> <p>I decided to build my own orchestrator. Something simple. Something that would:</p> <ol><li><strong>Rotate API keys automatically</strong> when one hits the limit</li> <li><strong>Work with multiple providers</strong> (OpenAI, Anthropic, Groq, Cerebras, all of them)</li> <li><strong>Be fast</strong>. Actually fast. I wrote it in Rust because… well, I wanted to learn Rust. And Python bindings are easy with PyO3.</li></ol> <p>The result? <strong>LLMAO</strong> - Lightweight LLM API Orchestrator.</p> <h2>The Surprise</h2> <p>Here’s where it gets interesting.</p> <p>I ran some benchmarks against LiteLLM. Expected maybe a small improvement since it’s compiled code.</p> <p>I was wrong.</p> <p><img src="/images/posts/llmao/benchmark.png" alt="LLMAO vs LiteLLM Performance Benchmark"/></p> <p>Look at those numbers:</p> <ul><li><strong>Cold start</strong>: ~100x faster</li> <li><strong>Memory usage</strong>: ~7x less</li> <li><strong>Latency (p99)</strong>: nearly half</li></ul> <p>I had to run the benchmarks multiple times because I didn’t believe it at first.</p> <h2>How It Works</h2> <p>Super simple. Install it:</p> <pre class="language-bash">${html(`<code class="language-bash">pip <span class="token function">install</span> llmao-py</code>`)}</pre> <p>Use it:</p> <pre class="language-python">${html(`<code class="language-python"><span class="token keyword">from</span> llmao <span class="token keyword">import</span> LLMClient

client <span class="token operator">=</span> LLMClient<span class="token punctuation">(</span><span class="token punctuation">)</span>
response <span class="token operator">=</span> client<span class="token punctuation">.</span>completion<span class="token punctuation">(</span>
    model<span class="token operator">=</span><span class="token string">"groq/llama-3.1-70b-versatile"</span><span class="token punctuation">,</span>
    messages<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token string">"role"</span><span class="token punctuation">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token string">"content"</span><span class="token punctuation">:</span> <span class="token string">"Hello!"</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span></code>`)}</pre> <p>Want multiple API keys? Just set them up:</p> <pre class="language-bash">${html(`<code class="language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GROQ_API_KEY</span><span class="token operator">=</span><span class="token string">"key1"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GROQ_API_KEY_2</span><span class="token operator">=</span><span class="token string">"key2"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GROQ_API_KEY_3</span><span class="token operator">=</span><span class="token string">"key3"</span></code>`)}</pre> <p>LLMAO handles the rotation automatically. When one key hits the limit, it moves to the next one. No manual switching. No waiting.</p> <h2>For My Fellow Students</h2> <p>If you’re a student using free tier APIs… this is for you. Stack up those free API keys from different accounts, let LLMAO rotate through them, and focus on what you’re actually building.</p> <p>No more rate limit interruptions.</p> <h2>Try It Out</h2> <p>The whole thing is open source. Check it out, break it, improve it, whatever you want.</p> `);
  GitHubCard($$renderer, { repo: "svviitzerland/LLMAO" });
  $$renderer.push(`<!----> <p>Would love to hear what you think. Found a bug? Open an issue. Have an idea? Pull requests welcome.</p> <p>Let’s make LLM development less painful.</p>`);
}
export {
  Building_llmao_md as default,
  metadata
};
