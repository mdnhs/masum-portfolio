"use client";
import SiteHeaderForm from "@/components/admin-panel/site-header-form";
import SiteHeaderTable from "@/components/admin-panel/site-header-tabel";
import { fetchAboutData } from "@/api/fetchAboutData";
import { SiteHeaderDataTypes } from "@/types/site-header-types";
import React, { useEffect, useState } from "react";

const HomeContainerAdmin = () => {
  const [data, setData] = useState<SiteHeaderDataTypes[] | null>(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchAboutData();
      setData(fetchedData?.data || null); // Access the first item in the array
    };

    getData();
  }, [isOpen]);

  const handleEdit = (item) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const handleClose = (item) => {
    setIsOpen(item);
  };

  return (
    <div>
      <SiteHeaderTable data={data} onEdit={handleEdit} onClose={handleClose} />
      {isOpen && (
        <SiteHeaderForm
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default HomeContainerAdmin;
