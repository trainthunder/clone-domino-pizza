import React from "react";
import SearchBranchHeader from "../components/search-branch-page/search-branch-header";
import { SearchStoreModalProvider } from "../context/search-store-modal-context";
import SearchStoreBurgerModal from "../components/search-branch-page/search-branch-burger-modal";
import SearchBranchMain from "../components/search-branch-page/search-branch-main";
import Footer from "../components/footer";
import { CountPizzaProvider } from "../context/add-pizza-context";

function SearchBranchPage() {
  return (
    <SearchStoreModalProvider>
      <div className="w-full h-full overflow-clip">
        <CountPizzaProvider>
          <SearchBranchHeader />
          <SearchStoreBurgerModal />
          <SearchBranchMain />
          <Footer />
        </CountPizzaProvider>
      </div>
    </SearchStoreModalProvider>
  );
}

export default SearchBranchPage;
