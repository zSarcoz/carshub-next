"use client";
import React, { useEffect, useState } from "react";
import { Input, Spinner } from "@nextui-org/react";
import { SearchIcon } from "@/public/icons/SearchIcon";
import { fetchCars } from "@/utils";
import { CarCard, SearchBar, ShowMore } from ".";
import { motion } from "framer-motion";
import { HomeProps } from "@/types";
import CustomFilter from "./CustomFilter";
import { fuels, yearsOfProduction } from "@/constants";
import Image from "next/image";

export default function CarCatalogue() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2020);

  // pagination

  const [limit, setLimit] = useState(12);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2020,
        fuel: fuel || "",
        limit: limit || 12,
        model: model || "",
      });
      setAllCars(result);
    } catch (err) {
      console.log("ERROR: " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <div className="mt-12 padding-x py-[5%] max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar setManuFacturer={setManufacturer} setModel={setModel} />
        <div className="home__filter-container">
          <CustomFilter setFilter={setFuel} title="fuel" options={fuels} />
          <CustomFilter
            setFilter={setYear}
            title="year"
            options={yearsOfProduction}
          />
        </div>
      </div>
      {allCars.length > 0 ? (
        <section>
          <div className="home__cars-wrapper">
            {allCars?.map((car) => (
              <>
                <CarCard car={car} />
              </>
            ))}
          </div>
          {loading && (
            <div className="mt-16 w-full flex-center">
              <Spinner/>
            </div>
          )}

          <ShowMore
            pageNumber={limit / 10}
            isNext={limit > allCars.length}
            setLimit={setLimit}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          {/* <p>{allCars?.message}</p> */}
        </div>
      )}
    </div>
  );
}
