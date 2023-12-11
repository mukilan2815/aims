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
      case "component":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Component
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Component(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Product(s)
            </p>
          </div>
        );
      case "shops":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Shop
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Shop(s)
            </p>
          </div>
        );
      case "subAssemblies":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Sub-Assembly
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Sub-Assemblies
            </p>
          </div>
        );
      case "operations":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Add Operation
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Operation(s)
            </p>
          </div>
        );

      case "jobCards":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Create Jobcard(s)
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View New Jobcard(s)
            </p>{" "}
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View All Jobcard(s)
            </p>{" "}
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Print Jobcard(s)
            </p>{" "}
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Cancel Jobcard(s)
            </p>
          </div>
        );
      case "jcClosureCode":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Generate Code
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              View Code
            </p>
          </div>
        );
      case "materialRequisition":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Material Request
            </p>{" "}
          </div>
        );
      case "reportGeneration":
        return (
          <div>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Job Card Reports
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Material Requisition Report{" "}
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              WO POS Reports
            </p>
            <p className="p-2 hover:text-white cursor-pointer rounded-lg active:scale-95 active:bg-blue-900 ">
              Consolidated JC Track Report{" "}
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

const Ratefixinghome = () => {
  const [sections, setSections] = useState({
    masters: false,
    component: false,
    shops: false,
    subAssemblies: false,
    operations: false,
    transactions: false,
    jobCards: false,
    jcClosureCode: false,
    materialRequisition: false,
    reports: false,
    reportGeneration: false,
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
      <div className="bg-bluecolor h-screen w-fit  text-gray-300 border-r-2 border-cyan-300">
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
          title="Component"
          hasChevron
          onclick="toggleContentBackground(this)"
          onClick={() => toggleSection("component")}
          isOpen={sections.component}
        />
        <Subcontent section="component" isOpen={sections.component} />
        <IconWithTitle
          icon={faShop}
          title="Shops"
          hasChevron
          onClick={() => toggleSection("shops")}
          isOpen={sections.shops}
        />
        <Subcontent section="shops" isOpen={sections.shops} />
        <IconWithTitle
          icon={faBoxesStacked}
          title="Sub-Assemblies"
          hasChevron
          onClick={() => toggleSection("subAssemblies")}
          isOpen={sections.subAssemblies}
        />
        <Subcontent section="subAssemblies" isOpen={sections.subAssemblies} />
        <IconWithTitle
          icon={faChartSimple}
          title="Operations"
          hasChevron
          onClick={() => toggleSection("operations")}
          isOpen={sections.operations}
        />
        <Subcontent section="operations" isOpen={sections.operations} />
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
          title="Jobcard(s)"
          hasChevron
          onClick={() => toggleSection("jobCards")}
          isOpen={sections.jobCards}
        />
        <Subcontent section="jobCards" isOpen={sections.jobCards} />
        <IconWithTitle
          icon={faBarcode}
          hasChevron
          title="JC Closure Code"
          onClick={() => toggleSection("jcClosureCode")}
          isOpen={sections.jcClosureCode}
        />
        <Subcontent section="jcClosureCode" isOpen={sections.jcClosureCode} />
        <IconWithTitle
          icon={faCodePullRequest}
          title="Material Requisition"
          hasChevron
          onClick={() => toggleSection("materialRequisition")}
          isOpen={sections.materialRequisition}
        />
        <Subcontent
          section="materialRequisition"
          isOpen={sections.materialRequisition}
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
          title="Report Generation"
          hasChevron
          onClick={() => toggleSection("reportGeneration")}
          isOpen={sections.reportGeneration}
        />
        <Subcontent
          section="reportGeneration"
          isOpen={sections.reportGeneration}
        />
      </div>
    </div>
  );
};

export default Ratefixinghome;
