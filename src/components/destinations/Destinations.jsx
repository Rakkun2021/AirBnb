import React from "react";
import "./destinations.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TuneIcon from "@mui/icons-material/Tune";
import CottageIcon from "@mui/icons-material/Cottage";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CastleIcon from "@mui/icons-material/Castle";
import TerrainIcon from "@mui/icons-material/Terrain";
import ForestIcon from "@mui/icons-material/Forest";
import PoolIcon from "@mui/icons-material/Pool";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HttpsIcon from "@mui/icons-material/Https";
import SurfingIcon from "@mui/icons-material/Surfing";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CabinIcon from "@mui/icons-material/Cabin";
import ChairIcon from "@mui/icons-material/Chair";
import HouseIcon from "@mui/icons-material/House";
import ParkIcon from "@mui/icons-material/Park";
import KayakingIcon from "@mui/icons-material/Kayaking";

const Destinations = () => {
  return (
    <div className="destinations">
      <div className="spots">
        <div className="trending">
          <TrendingUpIcon className="icon" />
          <p>Trending</p>
        </div>
        <div className="tinyHomes">
          <CottageIcon className="icon" />
          <p>Tiny Homes</p>
        </div>
        <div className="castles">
          <CastleIcon className="icon" />
          <p>Castles</p>
        </div>
        <div className="islands">
          <TerrainIcon className="icon" />
          <p>Islands</p>
        </div>
        <div className="nationalParks">
          <ForestIcon className="icon" />
          <p>National Parks</p>
        </div>
        <div className="amazingPools">
          <PoolIcon className="icon" />
          <p>Amazing Pools</p>
        </div>
        <div className="farms">
          <AgricultureIcon className="icon" />
          <p>Farms</p>
        </div>
        <div className="privateRooms">
          <HttpsIcon className="icon" />
          <p>Private Rooms</p>
        </div>
        <div className="beachFronts">
          <SurfingIcon className="icon" />
          <p>Beach Front</p>
        </div>
        <div className="OMG">
          <LocalFireDepartmentIcon className="icon" />
          <p>OMG!</p>
        </div>
        <div className="cabins">
          <CabinIcon className="icon" />
          <p>Cabins</p>
        </div>
        <div className="luxe">
          <ChairIcon className="icon" />
          <p>Luxe</p>
        </div>
        <div className="treeHouses">
          <HouseIcon className="icon" />
          <p>Treehouse</p>
        </div>
        <div className="tropical">
          <ParkIcon className="icon" />
          <p>Tropical</p>
        </div>
        <div className="lakeFront">
          <KayakingIcon className="icon" />
          <p>Lakefront</p>
        </div>
      </div>
      <div className="fade">
        <NavigateNextIcon className="navigateIcon" />
        <div className="filter">
          <TuneIcon className="icon" />
          <p>Filter</p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
