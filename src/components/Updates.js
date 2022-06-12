import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdatesCard from "./UpdatesCard";
import Installations from "./Installations";
function Updates() {
  const [hidden, setHidden] = useState(false);
  const Installation = "Installation";
  const InstallationIcon = "download";
  var InstUpdatesNumber = 2990;
  const Location = "Location";
  const LocationIcon = "location arrow";
  var LocUpdatesNumber = 10000;
  const Client = "Client";
  const ClientIcon = "user";
  var ClientUpdatesNumber = 5000;
  return (
    <div className="m-6 rounded-xl shadow-md border-2">
      <h1 className="text-3xl font-bold p-10"> Updates</h1>
      <Link
        className="text-inherit hover:text-black cursor-pointer"
        to="/installation"
      >
        <UpdatesCard
          updatesCategory={Installation}
          iconName={InstallationIcon}
          updatesNum={InstUpdatesNumber}
        />
      </Link>
      <Link
        className="text-inherit hover:text-black cursor-pointer"
        to="/location"
      >
        <UpdatesCard
          updatesCategory={Location}
          iconName={LocationIcon}
          updatesNum={LocUpdatesNumber}
        />
      </Link>
      <Link
        className="text-inherit hover:text-black cursor-pointer"
        to="/client"
      >
        <UpdatesCard
          updatesCategory={Client}
          iconName={ClientIcon}
          updatesNum={ClientUpdatesNumber}
        />
      </Link>
    </div>
  );
}

export default Updates;
