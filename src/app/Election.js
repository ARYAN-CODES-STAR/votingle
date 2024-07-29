import React from "react";
import Navbar from "./Navbar/page";

const Election = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-64">
        <img
          src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
          alt=""
        />
      </div>
      <div className="flex text-6xl font-serif text-slate-300 mt-8">
        India Elections
      </div>
      <div className="flex mt-10">
        Let&apos;s make the ballot secure and value the votes.{" "}
        <br className="mt-2" /> Want to learn about this secure ballot platform.
        Explore.{" "}
      </div>
      <div className="bg-transparent py-2 px-2 bg-slate-600 rounded-full text-xl mt-8">
        Nov 19,23 - June 29,24
      </div>
      <div className="address flex items-center text-sm mt-8">
        <div className="mr-2">
          <img
            src="https://avatars.githubusercontent.com/u/78686630?v=4"
            alt="ava_tar"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div>XCEEDFE*(#$733</div>
      </div>
      <div className="space-x-2">
        <button className="bg-transparent font-bold px-3 py-2 text-white rounded-full mt-8 border">
          1 Vote
        </button>
        <button className="bg-transparent font-bold px-3 py-2 text-white rounded-full mt-8 border">
          5 Contestants
        </button>
        <button className="bg-blue-700 font-bold px-3 py-2 text-white rounded-full mt-8">
          Create poll
        </button>
      </div>

      <div className="mt-16 text-5xl text-slate-400">Contestants</div>
      {/* <div class="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div class="relative p-6 px-6 py-14 md:px-12">
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            How we design and code open-source projects?
          </h2>
          <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            Tania Andrew
          </h5>
          <img
            alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center"
          />
        </div>
      </div> */}
      <div className="flex">
        <div className="relative h-[20rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-lg bg-slate-600 bg-clip-border text-center text-white mr-8">
          <div className="relative p-4">
            <h2 className="mb-4 font-sans text-xl font-medium leading-snug tracking-normal text-slate-400">
              How we design and code open-source projects?
            </h2>
            <h5 className="mb-2 font-sans text-base font-semibold tracking-normal text-gray-400">
              Tania Andrew
            </h5>
            <img
              alt="Tania Andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              class="relative inline-block h-[48px] w-[48px] rounded-full border-2 border-white object-cover object-center"
            />
          </div>
        </div>

        <div className="relative h-[20rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-lg bg-slate-600 bg-clip-border text-center text-gray-700">
          <div className="relative p-4">
            <h2 className="mb-4 font-sans text-xl font-medium leading-snug tracking-normal text-slate-400">
              How we design and code open-source projects?
            </h2>
            <h5 className="mb-2 font-sans text-base font-semibold tracking-normal text-gray-400">
              Tania Andrew
            </h5>
            <img
              alt="Tania Andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              class="relative inline-block h-[48px] w-[48px] rounded-full border-2 border-white object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex justify-around">
        <div className="bg-stone-600 w-64 h-64 flex-row">
          <div className="rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/78686630?v=4"
              alt=""
            />
          </div>
        </div>
        <div className="bg-emerald-800 w-64 h-64 justify-center items-center">
          Votes
        </div>
      </div> */}
    </div>
  );
};

export default Election;
