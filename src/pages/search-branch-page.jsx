import React from "react";
import SearchBranchHeader from "../components/search-branch-page/search-branch-header";
import { SearchStoreModalProvider } from "../context/search-store-modal-context";
import SearchStoreBurgerModal from "../components/search-branch-page/search-branch-burger-modal";

function SearchBranchPage() {
  return (
    <SearchStoreModalProvider>
      <div className="w-full h-full overflow-clip">
        <SearchBranchHeader />
        <SearchStoreBurgerModal />
      </div>
    </SearchStoreModalProvider>
  );
}

export default SearchBranchPage;
