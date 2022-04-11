export default function SplashPage() {
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md space-y-5">
            <h1 className="text-5xl font-bold">DynoCue</h1>

            <div className="max-w-md space-x-4">
              <button className="btn btn-primary">New File</button>
              <button className="btn btn-primary">Open</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
