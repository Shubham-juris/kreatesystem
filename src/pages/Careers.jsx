import React from 'react';
import OfficeClerk from '../components/Careers/OfficeClerk';
import DataEntryClerk from '../components/Careers/DataEntryClerk';
import Cleaner from '../components/Careers/Cleaner';
import Bookkeeper from '../components/Careers/Bookkeeper';
import AdministrativeAssistant from '../components/Careers/AdministrativeAssistant';
import Receptionist from '../components/Careers/Receptionist'; 

const Careers = () => {
  return (
    <>
      <OfficeClerk />
      <DataEntryClerk />
      <Cleaner />
      <Bookkeeper />
      <Receptionist />
      <AdministrativeAssistant />
    </>
  );
};

export default Careers;
