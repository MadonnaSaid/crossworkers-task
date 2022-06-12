import { Icon } from "semantic-ui-react";
function UpdatesStatistics() {
  return (
    <div className="m-6 rounded-xl shadow-md border-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-fit p-2">
        <div className="m-auto">
          <h1 className="font-bold text-xl">Updates</h1>
          <p className="text-sm">from: Friday, Dec 10, 2021</p>
          <p className="text-sm">to: Now</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 m-2 lg:m-auto">
          <div className="m-0 lg:m-auto">
            <Icon name="download" className="text-lime-400" />
            <text className="font-bold p-0 lg:p-2">Installation updates</text>
            <p className="px-8"> 5000-7000</p>
          </div>
          <div className="m-0 lg:m-auto">
            <Icon name="location arrow" className="text-red-300" />
            <text className="font-bold p-0 lg:p-2">Location updates</text>
            <p className="px-8">5000-10,000</p>
          </div>
          <div className="m-0 lg:m-auto">
            <Icon name="user" className="text-indigo-300" />
            <text className="font-bold p-0 lg:p-2">Client updates</text>
            <p className="px-8">78</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatesStatistics;
