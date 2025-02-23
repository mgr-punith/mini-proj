export default function Members() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-screen bg-[url('/images/college_proj_backgrnd.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className=" text-white text-center p-8 pl-28 rounded-lg h-[360px] w-[700px] backdrop-blur-lg ">
        <div className="font-medium text-3xl relative z-50">
          <div className="flex gap-6 my-3">
            <div>Developer</div>
            <div className="ml-28">:</div>
            <div>PUNEET</div>
          </div>
          <div className="flex gap-6 my-3">
            <div>Tester [QA]</div>
            <div className="ml-24">:</div>
            <div>VAIBHAV</div>
          </div>
          <div className="flex gap-6 my-3">
            <div>Security Engineer</div>
            <div className="ml-3">:</div>
            <div>ANIL</div>
          </div>
          <div className="flex gap-6 my-3">
            <div>Product Owner</div>
            <div className="ml-[50px]">:</div>
            <div>PRERANA</div>
          </div>
          <div className="flex gap-6 my-3">
            <div>Dev-Ops</div>
            <div className="ml-[132px]">:</div>
            <div>RITESH</div>
          </div>
          <div className="flex gap-6 my-3">
            <div>DevSecOps</div>
            <div className="ml-[93px]">:</div>
            <div>NAGESH</div>
          </div>
        </div>
      </div>
    </div>
  );
}
