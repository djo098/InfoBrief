import { VscGithub } from "react-icons/vsc";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-38 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/djo098/InfoBrief")}
          className="purple_btn"
        >
          Github&nbsp;<VscGithub className="w-5 h-5"/>
        </button>
      </nav>

      <h1 className="head_text !text-3xl">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="purple_gradient text-5xl">OpenAI GPT</span>
      </h1>
      <h2 className="desc">
        Transform those long and boring articles into readable summaries with
        InfoBrief, an article summarizer powered by OpenAI&apos;s GPT-4
      </h2>
    </header>
  );
};

export default Hero;
