import Image from "next/image";
import { AiFillLinkedin, AiFillGitlab, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
// import { HashLink as Link } from "react-router-hash-link";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
      <section>
        <nav className="py-10 mb-10 flex justify-center">
          {/* <h1 className="text-xl">Tiffany</h1> */}
          <ul className="flex items-center">
            <li>
              <a href="#about-me" className="text-xl p-3">About me</a>
            </li>
            <li>
              <a href="#publications" className="text-xl p-3">Publications</a>
            </li>
            <li>
              <a href="#contact-links" className="text-xl p-3">Contact</a>
            </li>
            {/* <li><a className='text-xl px-3 py-2 bg-blue-500 rounded-md' href="#">CV</a></li> */}
          </ul>
        </nav>
        <div className="flex justify-center">
          <Image
          className="rounded-full"
          src="/headshot.jpg"
          alt="headshot image"
          width={300}
          height={300}
          priority
          />
        </div>
        <div className="text-center p-10">
          <h2 className="text-4xl py-2 font-semibold">Tiffany C. Wu</h2>
          <h3 className="text-2xl py-2">PhD student</h3>
          <p className="text-md py-5">Hi! I am a 2nd year PhD student at the EECS department at York University, supervised by Dr. John K. Tsotsos. I am currently working on projects related to active vision, active visual search, and visual attention modelling. I am looking for industry internships for 2026!</p>
        </div>
        
        <Divider />

        <div id="about-me" >
          <h2 className="text-3xl py-5 font-semibold text-center">About me</h2>
          <p className="text-md py-3">I was born and raised in Hong Kong, and moved to Vancouver, Canada for my undergraduate studies. I received a BA with a double major in Computer Science and Psychology at UBC in 2020. While I was at UBC, I became deeply involved in the <a href="#" className="hover:underline hover:text-blue-500">UBC Visual Cognition Lab (VCL)</a>, led by Prof. Ron Rensink. The projects I worked on included one about robust inattentional blindness (NOVA) and one about mental representations of space (Image Transitions). I became project leader for both the NOVA and Image Transitions projects from 2018 to 2021, training new volunteers whilst running experiments and performing data analysis for various psychophysics experiments.</p> 
          <p className="text-md py-3">During my undergraduate years, I also joined Prof. Cristina Conati<span>&apos;</span>s lab to work on an HCI project, dynamic text-link interventions to improve text readability. I joined in the summer of 2019 as a NSERC USRA student, but continued working in the lab until I graduated.</p>
          <p className="text-md py-3">After I graduated from UBC, I took a gap year to continue working at the VCL. I joined Prof. John Tsotsos<span>&apos;</span>s lab at York University in 2021 as a Master<span>&apos;</span>s student in the EECS department. For my Master<span>&apos;</span>s thesis, I worked on exploring viewpoint selection during active visual search in a real-world, 3D environment. I decided to continue as a PhD student with John, and I am now working on the Selective Tuning Model of attention, extending it to include viewpoint selection, as well as modelling an executive attention controller for Selective Tuning.</p>

          <p>Outside of research, you can find me playing with my dog, bouldering outdoors, and performing ballet on stage.</p>
        </div>

      </section>

      <section>
        <div id="publications">
          <h3 className="text-3xl py-5 text-center font-semibold">Publications</h3>
          <h4 className="text-2xl py-2">Paper publications</h4>
          <p className="text-md">
          Lallé, S., Wu, T., & Conati, C. (2020, October). Gaze-driven links for magazine style narrative visualizations. In 2020 IEEE Visualization Conference (VIS) (pp. 166-170). IEEE.<a href="/msnv.pdf" target="_blank" className="hover:underline hover:text-blue-500">[pdf]</a> 
          </p>
          <p className="text-md">
          Wu, T., & Tsotsos, J. K. (2025). Real-world visual search goes beyond eye movements: Active searchers select 3D scene viewpoints too. bioRxiv, 2025-02.<a href="https://www.biorxiv.org/content/10.1101/2025.02.08.637269.full.pdf" className="hover:underline hover:text-blue-500">[pdf]</a>
          </p>
          <h4 className="text-2xl py-2">Posters</h4>
          <p className="text-md">
          Wu, T., & Tsotsos, J. K. (2024). Viewpoint selection in active visual search. Journal of Vision, 24(10), 328-328.<a href="/vss2024.pdf" target="_blank" className="hover:underline hover:text-blue-500">[pdf]</a>
          </p>
          <p className="text-md">
          Wu, T., & Tsotsos, J. K. (2023). Active visual search in a 3D real world environment. Journal of Vision, 23(9), 4713-4713.<a href="/vss2023.pdf" target='_blank' className="hover:underline hover:text-blue-500">[pdf]</a>
          </p>
          <h4 className="text-2xl py-2">Master<span>&apos;</span>s Thesis</h4>
          <p className="text-md">
            Wu, T. (2024). Active Visual Search: Investigating human strategies and how they compare to computational models. <a href="https://yorkspace.library.yorku.ca/bitstreams/3bc018c9-a283-41bb-97e8-d2aa92f99abc/download" className="hover:underline hover:text-blue-500">[pdf]</a>
          </p>
          
        </div>

      </section>

      <section>
      <h3 className="text-3xl py-5 text-center font-semibold" id="contact-links">Find me here:</h3>
        <div className="text-3xl flex justify-center gap-12">
          <a href="https://www.linkedin.com/in/tiffany-wu-1027/">
            <AiFillLinkedin />
            {/* <p className="text-md">LinkedIn</p> */}
          </a>
          <a href="https://gitlab.nvision.eecs.yorku.ca/tiffwu">
            <AiFillGitlab />
            {/* York Gitlab */}
          </a>
          <a href="https://github.com/tiffwu1027">
            <AiFillGithub />
            {/* Personal Github */}
          </a>
          <a href="https://scholar.google.com/citations?user=Lp1uZlkAAAAJ&hl=en">
          <SiGooglescholar />
          {/* Google Scholar */}
          </a>
          <a href="https://orcid.org/0000-0003-3696-4891">
          <SiOrcid />
          {/* Google Scholar */}
          </a>
          
        </div> 
      </section>

      </main>

    </div>
  );
}


const Divider = () => {
  return (
    <hr
      style={{ borderTop: "1px solid lightgrey" }}
    ></hr>
  )
}