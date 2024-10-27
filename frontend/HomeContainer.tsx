"use client";

import SiteHeaderForm from "@/components/admin-panel/site-header-form";
import SiteHeaderTable from "@/components/admin-panel/site-header-tabel";
import { fetchAboutData } from "@/api/fetchAboutData";
import { SelectedItem, SiteHeaderDataTypes } from "@/types/site-header-types";
import React, { useEffect, useState } from "react";

const HomeContainerAdmin: React.FC = () => {
  const [data, setData] = useState<SiteHeaderDataTypes[] | null>(null);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchAboutData();
      setData(fetchedData?.data || null);
    };

    getData();
  }, [isOpen]);

  const handleEdit = (item: SelectedItem) => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const handleClose = (shouldClose: boolean) => {
    setIsOpen(shouldClose);
    if (!shouldClose) {
      setSelectedItem(null);
    }
  };

  return (
    <div>
      <SiteHeaderTable data={data} onEdit={handleEdit} onClose={handleClose} />
      {isOpen &&
        selectedItem && ( // Ensure selectedItem is defined before passing it to SiteHeaderForm
          <SiteHeaderForm
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            onClose={() => handleClose(false)}
          />
        )}
    </div>
  );
};

export default HomeContainerAdmin;
