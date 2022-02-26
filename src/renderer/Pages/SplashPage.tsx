import { useHistory } from 'react-router';

export default function SplashPage() {
  const history = useHistory();
  return (
    <div className="w-full flex justify-center h-full items-center">
      <div className="bg-neutral-800 w-3/4 h-96 shadow-xl rounded p-5">
        <div className="flex h-full w-full flex-col space-y-2">
          <div className="text-white w-full text-center text-3xl font-mono border-b p-1 select-none">
            DynoCue
          </div>
          <div className="w-full flex justify-evenly">
            <button
              className="bg-white rounded p-2 shadow-md hover:bg-slate-200"
              onClick={() => {
                history.push('/show');
              }}
            >
              New File
            </button>
            <button className="bg-white rounded p-2 shadow-md hover:bg-slate-200">
              Open File
            </button>
          </div>
          <div className="h-full overflow-auto" />
        </div>
      </div>
    </div>
  );
}
