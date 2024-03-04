// components/Table.tsx
import React from 'react';

interface TableProps {
    // Define any props for your table here. For now, we'll just use children.
    children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
            <table className="w-full text-right text-gray-500 dark:text-gray-400">
                {children}
            </table>
        </div>
    );
};

export default Table;
