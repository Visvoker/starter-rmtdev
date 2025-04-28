import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import JobItemContent from "./JobItemContent";
import Sidebar, { SidebarTop } from "./Sidebar";
import JobList from "./JobList";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";
import { useDebounce, useJobItems } from "../lib/hook";
import { Toaster } from "react-hot-toast";
import PaginationControls from "./PaginationControls";
import { RESULTS_PER_PAGE } from "../lib/constants";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 250);
  const { jobItems, isLoading } = useJobItems(debouncedValue);
  const [currentPage, setCurrentPage] = useState(1);

  // derived / computed state
  const totalNumberOfResult = jobItems?.length || 0;
  const totalNumberOfPage = totalNumberOfResult / RESULTS_PER_PAGE;
  const jobItemsSliced =
    jobItems?.slice(
      currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
      currentPage * RESULTS_PER_PAGE
    ) || [];

  // event handlers /actions
  const handleChangePage = (direction: "next" | "previous") => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Background />

      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResult={totalNumberOfResult} />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />

          <PaginationControls
            onClick={handleChangePage}
            currentPage={currentPage}
            totalNumberOfPage={totalNumberOfPage}
          />
        </Sidebar>
        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
