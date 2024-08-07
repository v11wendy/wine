import React from "react";
import { Route, Routes} from "react-router-dom";
import PropTypes from "prop-types";

import { PageMain } from "../pages/PageMain";
import { PageCart } from "../pages/PageCart";
import { LoginSignup } from "../pages/LoginSignup";

function PagesRouter( {cbChangedFilter, cbChangedSort, cbChangeOutputType, loadState, wineItemCode, loadError, isShowPages,
  winesArrLength, winesPerPage, cbPaginate, currentPage} ) {
    return (
      <Routes>
        <Route path="/" element={<PageMain
          cbChangedFilter={cbChangedFilter}
          cbChangedSort={cbChangedSort}
          cbChangeOutputType={cbChangeOutputType}
          loadState={loadState}
          wineItemCode={wineItemCode}
          loadError={loadError}
          isShowPages={isShowPages}
          winesArrLength={winesArrLength}
          winesPerPage={winesPerPage}
          cbPaginate={cbPaginate}
          currentPage={currentPage}
          />}
        />
        <Route path="/italy" element={<PageMain
          cbChangedFilter={cbChangedFilter}
          cbChangedSort={cbChangedSort}
          cbChangeOutputType={cbChangeOutputType}
          loadState={loadState}
          wineItemCode={wineItemCode}
          loadError={loadError}
          isShowPages={isShowPages}
          winesArrLength={winesArrLength}
          winesPerPage={winesPerPage}
          cbPaginate={cbPaginate}
          currentPage={currentPage}
          />}
        />
        <Route path="/spain" element={<PageMain
          cbChangedFilter={cbChangedFilter}
          cbChangedSort={cbChangedSort}
          cbChangeOutputType={cbChangeOutputType}
          loadState={loadState}
          wineItemCode={wineItemCode}
          loadError={loadError}
          isShowPages={isShowPages}
          winesArrLength={winesArrLength}
          winesPerPage={winesPerPage}
          cbPaginate={cbPaginate}
          currentPage={currentPage}
          />}
        />
        <Route path="/france" element={<PageMain
          cbChangedFilter={cbChangedFilter}
          cbChangedSort={cbChangedSort}
          cbChangeOutputType={cbChangeOutputType}
          loadState={loadState}
          wineItemCode={wineItemCode}
          loadError={loadError}
          isShowPages={isShowPages}
          winesArrLength={winesArrLength}
          winesPerPage={winesPerPage}
          cbPaginate={cbPaginate}
          currentPage={currentPage}
          />}
        />
        <Route path="/new-world" element={<PageMain
          cbChangedFilter={cbChangedFilter}
          cbChangedSort={cbChangedSort}
          cbChangeOutputType={cbChangeOutputType}
          loadState={loadState}
          wineItemCode={wineItemCode}
          loadError={loadError}
          isShowPages={isShowPages}
          winesArrLength={winesArrLength}
          winesPerPage={winesPerPage}
          cbPaginate={cbPaginate}
          currentPage={currentPage}
          />}
        />
        <Route path="/cart" element={<PageCart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
    );
  }

PagesRouter.propTypes = {
  cbChangedFilter: PropTypes.func.isRequired,
  cbChangedSort: PropTypes.func.isRequired,
  cbChangeOutputType: PropTypes.func.isRequired,
  loadState: PropTypes.number.isRequired,
  wineItemCode: PropTypes.array,
  loadError: PropTypes.string,
  isShowPages: PropTypes.bool.isRequired,
  winesArrLength: PropTypes.number,
  winesPerPage: PropTypes.number.isRequired,
  cbPaginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PagesRouter;