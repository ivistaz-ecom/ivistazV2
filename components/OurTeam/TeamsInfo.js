"use client";
import { teamsData } from "@/utils/TeamsData";
import React from "react";

const TeamsInfo = () => {
  return (
    <div className="bg-white pb-5">
      <div className="px-4 lg:px-0">
        {teamsData.map((team, index) => (
          <div
            key={index}
            className={`${team.style} rounded-3xl mt-10 p-6 lg:p-8`}
          >
            <h3 className="text-2xl lg:text-[28px] font-monument-bold mb-4">
              {team.title}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-lg lg:text-xl">
              <li>
                <span className="font-monument-bold">Average Experience:</span>{" "}
                <span className="font-light">{team.experience}</span>
              </li>
              {team.strengths.map((item, i) => (
                <li key={i}>
                  <span className="font-monument-bold">{item.label}:</span>{" "}
                  <span className="font-light">{item.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 lg:text-xl">{team.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsInfo;
