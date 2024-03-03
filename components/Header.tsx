import { Dropdown, Navbar, DropdownItem, Avatar } from 'flowbite-react';
import React from 'react';

const Header = () => {
    return (
        <div className='mx-40 py-4'>
            <Navbar fluid rounded>
                <div className='flex sm:flex-row flex-col justify-between items-center w-full'>
                    <div className='flex items-center gap-x-4'>
                        <h1 className='text-xl'>Logo</h1>
                        <div className='border rounded-full w-28 flex items-center justify-center'>
                            <Dropdown label="NLP" dismissOnClick={false} color='' size='sm'>
                                {/* Add custom styling here to match the design in your image */}
                                <DropdownItem>Dashboard</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem>Earnings</DropdownItem>
                                <DropdownItem>Sign out</DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                    {/* Left side */}

                    <div className='flex gap-x-4 items-end'>
                        <div>
                            <Avatar rounded size='md' />
                        </div>
                        <div className='border rounded-full w-28 flex items-center justify-center'>
                            <Dropdown label="NLP" dismissOnClick={false} color='' size='sm'>
                                {/* Add custom styling here to match the design in your image */}
                                <DropdownItem>Dashboard</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem>Earnings</DropdownItem>
                                <DropdownItem>Sign out</DropdownItem>
                            </Dropdown>
                        </div>

                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;
