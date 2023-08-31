// import Image from "next/image";
// import ListIconActive from "@/public/listiconactive.svg";
// import ListIcon from "@/public/listicon.svg";
// import GridIconActive from "@/public/gridiconactive.svg";
// import GridIcon from "@/public/gridicon.svg";
// import React, {useState} from "react";
// import FilterPopup from "@/components/searchbar/filterpopup/filterpopup";
//
// export type ViewModeChangeHandler = (mode: "list" | "grid") => void;
//
// interface SearchBarControlsProps {
//     onViewModeChange: ViewModeChangeHandler;
//     viewMode: "list" | "grid";
// }
//
// export default function SearchBarControls({onViewModeChange, viewMode}: SearchBarControlsProps) {
//     function handleViewModeChange(mode: "list" | "grid") {
//         onViewModeChange(mode);
//     }
//
//     const [isFilterVisible, setFilterVisible] = useState(false);
//
//     function togglePopup() {
//         setFilterVisible(!isFilterVisible);
//     }
//
//     return (
//         <div className={"searchBarControlsAndFilter"}>
//             <div className={"searchBarControls"}>
//                 <button onClick={() => handleViewModeChange("list")}>
//                     <Image
//                         className={"searchBarIcon"}
//                         src={viewMode === "list" ? ListIconActive : ListIcon}
//                         alt={"Icon"}
//                         width={14}
//                         height={14}
//                     />
//                 </button>
//                 <button onClick={() => handleViewModeChange("grid")}>
//                     <Image
//                         className={"searchBarIcon"}
//                         src={viewMode === "grid" ? GridIconActive : GridIcon}
//                         alt={"Icon"}
//                         width={14}
//                         height={14}
//                     />
//                 </button>
//
//                 <button onClick={togglePopup}>Filter</button>
//
//                 {isFilterVisible && <FilterPopup/>}
//             </div>
//         </div>
//     );
// }
