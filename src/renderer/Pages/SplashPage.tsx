import { Link } from 'react-router-dom';

export default function SplashPage() {
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md space-y-5">
            <h1 className="text-5xl font-bold">DynoCue</h1>

            <div className="max-w-md space-x-4">
              <Link to="/core">
                {' '}
                <button className="btn ">New</button>
              </Link>
              <button className="btn ">Open</button>
              <Link to="/settings">
                {' '}
                <button className="btn ">Settings</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
