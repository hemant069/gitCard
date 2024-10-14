"use client";
import React from "react";

import { MapPin, Link, GithubIcon } from "lucide-react";
interface CardProps {
  Data: {
    name: string;
    followers: number;
    following: number;
    bio: string;
    avatar_url: string;
    url: string;
    email: string;
    blog: string;
    location: string;
    twitter_username: string;
    public_repos: number;
  };
}
export default function Card({ Data }: CardProps) {
  const {
    name,
    followers,
    following,
    bio,
    avatar_url,
    url,
    email,
    blog,
    location,
    twitter_username,
    public_repos,
  } = Data;

  const handleOnX = (twitter_username) => {
    window.location.href = `https://x.com/${twitter_username}`;
  };

  return (
    <div className="w-[45rem] mx-auto p-6 bg-white  rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-6 bg-white">
        <div className="flex-1 space-y-4 bg-white">
          <div className="relative w-32 h-32 mx-auto md:mx-0 bg-white">
            <img
              src={avatar_url}
              alt="Profile"
              className="rounded-full object-cover"
              width={128}
              height={128}
            />
          </div>
          <div className="space-y-2 bg-white">
            <h2 className="text-2xl font-bold text-center md:text-left">
              {name}
            </h2>
            <p className="text-gray-600 text-center md:text-left bg-white">
              {bio}
            </p>
          </div>
          <div className="flex bg-white items-center justify-center md:justify-start space-x-2 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex bg-white justify-center md:justify-start space-x-4">
            <a
              className="text-gray-400 hover:text-gray-500"
              onClick={() => handleOnX(twitter_username)}
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href={""} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href={url} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-1 space-y-4 bg-white">
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold">{followers}</div>
              <div className="text-xs text-gray-500 uppercase">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{following}</div>
              <div className="text-xs text-gray-500 uppercase">Following</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{public_repos}</div>
              <div className="text-xs text-gray-500 uppercase">
                Repositories
              </div>
            </div>
          </div>
          {/* <div className="space-y-2">
            <h3 className="text-lg font-semibold">Popular Repositories</h3>
            <ul className="space-y-2">
              {[1, 2, 3].map((repo) => (
                <li key={repo} className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Project {repo}</span>
                    <span className="text-sm text-gray-500">
                      ⭐️ {Math.floor(Math.random() * 100)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
