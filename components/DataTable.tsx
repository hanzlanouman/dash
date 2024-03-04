// components/DataTable.tsx
import React from 'react';
import Table from './Table';

const DataTable: React.FC = () => {
    // Dummy data array
    const data = [
        {
            id: '1',
            name: 'اسم عائلي جاسم',
            email: 'email@example.com',
            date: '14-2-2024',
            role: 'دور المستخدم',
        },
        {
            id: '1',
            name: 'اسم عائلي جاسم',
            email: 'email@example.com',
            date: '14-2-2024',
            role: 'دور المستخدم',
        },
        {
            id: '1',
            name: 'اسم عائلي جاسم',
            email: 'email@example.com',
            date: '14-2-2024',
            role: 'دور المستخدم',
        },
        {
            id: '1',
            name: 'اسم عائلي جاسم',
            email: 'email@example.com',
            date: '14-2-2024',
            role: 'دور المستخدم',
        },
        {
            id: '1',
            name: 'اسم عائلي جاسم',
            email: 'email@example.com',
            date: '14-2-2024',
            role: 'دور المستخدم',
        },
        {
            id: '1',
            name: 'اسم عائلي جاسم',
            email: 'email@example.com',
            date: '14-2-2024',
            role: 'دور المستخدم',
        },
        {
            id: '1',
            name: 'اسم عائلي جاسم',
            email: 'email@example.com',
            date: '14-2-2024',
            role: 'دور المستخدم',
        },
        // Add more dummy data objects as needed...
    ];

    return (
        <Table>
            <thead className=" text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-6 px-6">
                        رقم المستخدم
                    </th>
                    <th scope="col" className="py-6 px-6">
                        اسم المستخدم
                    </th>
                    <th scope="col" className="py-6 px-6">
                        البريد الإلكتروني
                    </th>
                    <th scope="col" className="py-6 px-6">
                        تاريخ التسجيل
                    </th>
                    <th scope="col" className="py-6 px-6">
                        دور المستخدم
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={row.id}>
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {row.id}
                        </th>
                        <td className="py-4 px-6">{row.name}</td>
                        <td className="py-4 px-6">{row.email}</td>
                        <td className="py-4 px-6">{row.date}</td>
                        <td className="py-4 px-6">{row.role}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DataTable;
