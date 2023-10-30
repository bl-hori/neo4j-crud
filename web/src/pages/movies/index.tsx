import { Route, Routes } from "react-router-dom";
import { Edit } from "./Edit";
import { List } from "./List";
import { New } from "./New";

export const Movies = () => {
    return (
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:id/edit" element={<Edit />} />
            <Route path="/new" element={<New />} />
        </Routes>
    )
};