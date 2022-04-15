import BackArrow from '../../Components/NavigationItems';

export default function Settings() {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <BackArrow to="/" />
          <div className="left-14 absolute text-xl">Settings</div>
        </div>
      </div>
    </div>
  );
}
