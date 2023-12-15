import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faTrainSubway,
  faBoxesStacked,
  faAddressCard,
  faShop,
  faChartSimple,
  faMoneyBillWave,
  faSquarePlus,
  faBarcode,
  faCodePullRequest,
  faClipboard,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const Subcontent = ({ section, isOpen }) => {
  const getSubcontent = (section) => {
    switch (section) {
      case "Products":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Product
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Product(s)
            </p>
          </div>
        );
      case "component":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Component
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Component(s)
            </p>
          </div>
        );
      case "Units":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Units
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Unit(s)
            </p>
          </div>
        );
      case "Departments":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Department
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Departments
            </p>
          </div>
        );
      case "Railways":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Railway
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Railway(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Import Railway(s)
            </p>
          </div>
        );

      case "Divisions":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Division
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Division(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Import Division(s)
            </p>
          </div>
        );
      case "Cofficers":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Cont officer
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Cont officers(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Import Cont officers(s)
            </p>
          </div>
        );
      case "Consignees":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Consignees
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Consignees(s)
            </p>
          </div>
        );
      case "BOM":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add BOM
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View BOM
            </p>
          </div>
        );
      case "HRInputs":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Rate Inputs
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Rate Input(s)
            </p>
          </div>
        );
      case "DmdReg":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Demand
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Demand(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Demand Report(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Supply Report(s)
            </p>
          </div>
        );
      case "WorkOrder":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Work Order
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Work Order(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Closed Work Order(s)
            </p>
          </div>
        );
      case "MDS":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View MDS
            </p>
          </div>
        );
      case "ItemRateRevision":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Generate Rate
            </p>
          </div>
        );
      case "Rates":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Rate
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Rate(s)
            </p>
          </div>
        );
      case "ProductionSchedule":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Schedule
            </p>
          </div>
        );
      case "SupplyDemand":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Supply Demands
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Supply Demands
            </p>
          </div>
        );
      case "ConsigneeWorkorder":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Consignee WO
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Show Consignee WO
            </p>
          </div>
        );
      case "WorkorderReport":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Total WorkOrder(S)
            </p>
          </div>
        );
      case "DemandReport":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Total Demand(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Cancelled/Closed Demand(s)
            </p>
          </div>
        );
      case "MDSReport":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              MDS Report
            </p>
          </div>
        );
      case "ConsigneeWO":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
            Consignee Report
            </p>
          </div>
        );
      case "NameChangeApproval":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Product Changes Approval
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
<div className={`ml-6 transition-all1 ${isOpen ? "block" : "hidden"}`}>
      {getSubcontent(section)}
    </div>
  );
};

const IconWithTitle = ({
  icon,
  title,
  hasChevron = false,
  onClick,
  isOpen,
  section,
}) => (
  <div className="flex content items-center justify-between" onClick={onClick}>
    <div className="flex items-center">
      <FontAwesomeIcon icon={icon} className="mr-4" />
      <h1>{title}</h1>
    </div>
    <div>
      {hasChevron && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`mr-3 ${isOpen ? "rotate-90" : ""}`}
        />
      )}
    </div>
  </div>
);

const Marketinghome = () => {
  const [sections, setSections] = useState({
    masters: false,
    Products: false,
    component: false,
    Units: false,
    Departments: false,
    Railways: false,
    Divisions: false,
    Cofficers: false,
    Consignees: false,
    BOM: false,
    HRInputs: false,
    transactions: false,
    DmdReg: false,
    WorkOrder: false,
    MDS: false,
    ItemRateRevision: false,
    Rates: false,
    ProductionSchedule: false,
    SupplyDemand: false,
    ConsigneeWorkorder: false,
    reports: false,
    WorkorderReport: false,
    DemandReport: false,
    MDSReport: false,
    ConsigneeWO: false,
    NameChangeApproval: false,
  });

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-bluecolor p-4 ">
        <FontAwesomeIcon icon={faTrainSubway} className="text-xl font-color" />
        <h1 className="text-2xl font-color font-bold ml-2">AIMS Server</h1>
      </div>
      <div className="bg-bluecolor w-fit  text-gray-300 border-r-2 border-cyan-300">
        <div
          className="flex align-middle items-center heading heading"
          onClick={() => toggleSection("masters")}
        >
          <FontAwesomeIcon icon={faCoins} className="mr-4" />
          <h1>Masters</h1>
        </div>
        <Subcontent section="masters" isOpen={sections.masters} />
        <IconWithTitle
          icon={faBoxesStacked}
          title="Products"
          hasChevron
          onclick="toggleContentBackground(this)"
          onClick={() => toggleSection("Products")}
          isOpen={sections.Products}
        />
        <Subcontent section="Products" isOpen={sections.Products} />
        <IconWithTitle
          icon={faBoxesStacked}
          title="Component"
          hasChevron
          onclick="toggleContentBackground(this)"
          onClick={() => toggleSection("component")}
          isOpen={sections.component}
        />
        <Subcontent section="component" isOpen={sections.component} />
        <IconWithTitle
          icon={faShop}
          title="Units"
          hasChevron
          onClick={() => toggleSection("Units")}
          isOpen={sections.Units}
        />
        <Subcontent section="Units" isOpen={sections.Units} />
        <IconWithTitle
          icon={faBoxesStacked}
          title="Departments"
          hasChevron
          onClick={() => toggleSection("Departments")}
          isOpen={sections.Departments}
        />
        <Subcontent section="Departments" isOpen={sections.Departments} />
        <IconWithTitle
          icon={faChartSimple}
          title="Railways"
          hasChevron
          onClick={() => toggleSection("Railways")}
          isOpen={sections.Railways}
        />
        <Subcontent section="Railways" isOpen={sections.Railways} />
        <IconWithTitle
          icon={faChartSimple}
          title="Divisions"
          hasChevron
          onClick={() => toggleSection("Divisions")}
          isOpen={sections.Divisions}
        />
        <Subcontent section="Divisions" isOpen={sections.Divisions} />
        <IconWithTitle
          icon={faChartSimple}
          title="Cont Officers"
          hasChevron
          onClick={() => toggleSection("Cofficers")}
          isOpen={sections.Cofficers}
        />
        <Subcontent section="Cofficers" isOpen={sections.Cofficers} />
        <IconWithTitle
          icon={faChartSimple}
          title="Consignees"
          hasChevron
          onClick={() => toggleSection("Consignees")}
          isOpen={sections.Consignees}
        />
        <Subcontent section="Consignees" isOpen={sections.Consignees} />
        <IconWithTitle
          icon={faChartSimple}
          title="BOM"
          hasChevron
          onClick={() => toggleSection("BOM")}
          isOpen={sections.BOM}
        />
        <Subcontent section="BOM" isOpen={sections.BOM} />
        <IconWithTitle
          icon={faChartSimple}
          title="Hourly Rated Inputs"
          hasChevron
          onClick={() => toggleSection("HRInputs")}
          isOpen={sections.HRInputs}
        />
        <Subcontent section="HRInputs" isOpen={sections.HRInputs} />
        <div
          className="flex heading items-center"
          onClick={() => toggleSection("transactions")}
        >
          <FontAwesomeIcon icon={faMoneyBillWave} className="mr-4" />
          <h1>Transactions</h1>
        </div>
        <Subcontent section="transactions" isOpen={sections.transactions} />
        <IconWithTitle
          icon={faAddressCard}
          title="Dmd Registration"
          hasChevron
          onClick={() => toggleSection("DmdReg")}
          isOpen={sections.DmdReg}
        />
        <Subcontent section="DmdReg" isOpen={sections.DmdReg} />
        <IconWithTitle
          icon={faBarcode}
          hasChevron
          title="Work Order(B)"
          onClick={() => toggleSection("WorkOrder")}
          isOpen={sections.WorkOrder}
        />
        <Subcontent section="WorkOrder" isOpen={sections.WorkOrder} />
        <IconWithTitle
          icon={faCodePullRequest}
          title="MDS"
          hasChevron
          onClick={() => toggleSection("MDS")}
          isOpen={sections.MDS}
        />
        <Subcontent section="MDS" isOpen={sections.MDS} />
        <IconWithTitle
          icon={faCodePullRequest}
          title="Item Rate Revision"
          hasChevron
          onClick={() => toggleSection("ItemRateRevision")}
          isOpen={sections.ItemRateRevision}
        />
        <Subcontent section="ItemRateRevision" isOpen={sections.ItemRateRevision} />
        <IconWithTitle
          icon={faCodePullRequest}
          title="Rates"
          hasChevron
          onClick={() => toggleSection("Rates")}
          isOpen={sections.Rates}
        />
        <Subcontent section="Rates" isOpen={sections.Rates} />
        <IconWithTitle
          icon={faCodePullRequest}
          title="Production Schedule"
          hasChevron
          onClick={() => toggleSection("ProductionSchedule")}
          isOpen={sections.ProductionSchedule}
        />
        <Subcontent section="ProductionSchedule" isOpen={sections.ProductionSchedule} />
        <IconWithTitle
          icon={faCodePullRequest}
          title="Supply Demand(S)"
          hasChevron
          onClick={() => toggleSection("SupplyDemand")}
          isOpen={sections.SupplyDemand}
        />
        <Subcontent section="SupplyDemand" isOpen={sections.SupplyDemand} />
        <IconWithTitle
          icon={faCodePullRequest}
          title="Consignee Workorder"
          hasChevron
          onClick={() => toggleSection("ConsigneeWorkorder")}
          isOpen={sections.ConsigneeWorkorder}
        />
        <Subcontent
          section="ConsigneeWorkorder"
          isOpen={sections.ConsigneeWorkorder}
        />
        <div
          className="flex heading items-center"
          onClick={() => toggleSection("reports")}
        >
          <FontAwesomeIcon icon={faClipboard} className="mr-4" />
          <h1>Reports</h1>
        </div>
        <Subcontent section="reports" isOpen={sections.reports} />
        <IconWithTitle
          icon={faSquarePlus}
          title="Workorder Report"
          hasChevron
          onClick={() => toggleSection("WorkorderReport")}
          isOpen={sections.WorkorderReport}
        />
        <Subcontent section="WorkorderReport" isOpen={sections.WorkorderReport} />
        <IconWithTitle
          icon={faSquarePlus}
          title="Demand Report"
          hasChevron
          onClick={() => toggleSection("DemandReport")}
          isOpen={sections.DemandReport}
        />
        <Subcontent section="DemandReport" isOpen={sections.DemandReport} />
        <IconWithTitle
          icon={faSquarePlus}
          title="MDS Report"
          hasChevron
          onClick={() => toggleSection("MDSReport")}
          isOpen={sections.MDSReport}
        />
        <Subcontent section="MDSReport" isOpen={sections.MDSReport} />
        <IconWithTitle
          icon={faSquarePlus}
          title="Consignee WO"
          hasChevron
          onClick={() => toggleSection("ConsigneeWO")}
          isOpen={sections.ConsigneeWO}
        />
        <Subcontent section="ConsigneeWO" isOpen={sections.ConsigneeWO} />
        <IconWithTitle
          icon={faSquarePlus}
          title="Name Change Approval"
          hasChevron
          onClick={() => toggleSection("NameChangeApproval")}
          isOpen={sections.NameChangeApproval}
        />
        <Subcontent
          section="NameChangeApproval"
          isOpen={sections.NameChangeApproval}
        />
        <br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  );
};


export default Marketinghome