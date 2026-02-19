import { Link } from "react-router";
import { ArrowRight, Calendar, Users, BookOpen, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImage from "figma:asset/9361df9e8159cfe8be5981faf77b95ebd4f62280.png";
import aclLogo from "figma:asset/7bf03a2e274025b4b1735a3c665bd55659810a89.png";
import rebuildLogo from "figma:asset/3f28c04d13f8faa09a9ecf8ef730a92bb948f68f.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-charcoal-900 py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImage}
            alt="Warm community gathering with evening lights"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Be a light in public life starting in your local branch.
            </h1>
            <p className="mt-6 text-lg leading-8 text-charcoal-200">
              CiP encourages Christians from all denominations to engage in politics as a mission field. Join a party, strive for office, and build relationships where faith can be lived in front of others.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/start-here"
                className="rounded-full bg-copper-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-copper-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-600 transition-all"
              >
                Start Here
              </Link>
              <Link
                to="/events"
                className="text-sm font-semibold leading-6 text-white hover:text-copper-400 flex items-center gap-1"
              >
                Find an Event <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-charcoal-400">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Non-partisan
              </span>
              <span className="flex items-center gap-2">
                <Heart className="h-4 w-4" /> Christian mission
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Pathway */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
              How you can make a difference
            </h2>
            <p className="mt-4 text-lg leading-8 text-charcoal-600">
              Political engagement as a christian isn't just about voting. It's about saving Australia from darkness by bringing Christ's light into our political institutions
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-copper-100 text-copper-700">
                  <Users className="h-8 w-8" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-charcoal-900">
                  1. Join a party
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-charcoal-600">
                  <p className="flex-auto">
                    Become a member of a local branch. Be a faithful presence in the room where decisions begin.
                  </p>
                  <p className="mt-6">
                    <Link to="/join" className="text-sm font-semibold text-copper-600 hover:text-copper-500">
                      Learn how <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <BookOpen className="h-8 w-8" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-charcoal-900">
                  2. Connect & Grow
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-charcoal-600">
                  <p className="flex-auto">
                    Find fellowship with other Christians in politics. Equip yourself with resources for public discipleship.
                  </p>
                  <p className="mt-6">
                    <Link to="/resources" className="text-sm font-semibold text-copper-600 hover:text-copper-500">
                      Explore resources <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-charcoal-100 text-charcoal-700">
                  <Heart className="h-8 w-8" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-charcoal-900">
                  3. Serve Faithfully
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-charcoal-600">
                  <p className="flex-auto">
                    Be a servant to others whether in your local branch or local, state and federal government
                  </p>
                  <p className="mt-6">
                    <Link to="/events" className="text-sm font-semibold text-copper-600 hover:text-copper-500">
                      Find opportunities <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Scripture Feature */}
      <section className="bg-charcoal-50 py-20 border-y border-charcoal-200">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <blockquote className="text-2xl font-medium italic text-charcoal-900 sm:text-3xl leading-relaxed font-serif">
            "You are the salt of the earth... You are the light of the world. A town built on a hill cannot be hidden... In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven."
          </blockquote>
          <cite className="mt-8 block font-semibold text-copper-700 not-italic">
            — Matthew 5:13-16
          </cite>
          <div className="mt-8 mx-auto h-1 w-24 bg-gold-400 rounded-full"></div>
        </div>
      </section>

      {/* Upcoming Events Teaser */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal-900">Upcoming Events</h2>
            <Link to="/events" className="hidden text-sm font-semibold text-copper-600 hover:text-copper-500 md:block">
              View all events <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col overflow-hidden rounded-lg shadow-sm border border-charcoal-200 bg-white hover:shadow-md transition-shadow">
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-copper-600">
                      Gathering
                    </div>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold text-charcoal-900">CiP Launch Event: Sydney</p>
                      <p className="mt-3 text-base text-charcoal-500">
                        Join us for an evening of vision, prayer, and connection as we launch Christians in Politics in NSW.
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Calendar className="h-5 w-5 text-charcoal-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-charcoal-900">
                        Oct {12 + i}, 2026
                      </p>
                      <p className="text-sm text-charcoal-500">
                        7:00 PM • Sydney CBD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/events" className="text-sm font-semibold text-copper-600 hover:text-copper-500">
              View all events <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="bg-charcoal-50 py-16 border-t border-charcoal-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold leading-8 text-charcoal-500 uppercase tracking-wide">
            Recommended Connections & Partners
          </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-start gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <a href="https://freedomforfaith.org.au/" target="_blank" rel="noopener noreferrer" className="group col-span-1 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
               <img src="https://www.google.com/s2/favicons?domain=freedomforfaith.org.au&sz=128" alt="Freedom for Faith" className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all" />
               <span className="text-sm font-semibold text-charcoal-600 group-hover:text-copper-700 text-center leading-tight">Freedom for Faith</span>
            </a>
            <a href="https://www.acl.org.au/" target="_blank" rel="noopener noreferrer" className="group col-span-1 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
               <ImageWithFallback src={aclLogo} alt="ACL" className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all" />
               <span className="text-sm font-semibold text-charcoal-600 group-hover:text-copper-700 text-center leading-tight">Australian Christian Lobby</span>
            </a>
            <a href="https://rebuildaustralia.org/" target="_blank" rel="noopener noreferrer" className="group col-span-1 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
               <ImageWithFallback src={rebuildLogo} alt="Rebuild Australia" className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all" />
               <span className="text-sm font-semibold text-charcoal-600 group-hover:text-copper-700 text-center leading-tight">Rebuild Australia</span>
            </a>
            <a href="https://christiansforlabor.org/" target="_blank" rel="noopener noreferrer" className="group col-span-1 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
               <img src="https://www.google.com/s2/favicons?domain=christiansforlabor.org&sz=128" alt="Christians for Labor" className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all" />
               <span className="text-sm font-semibold text-charcoal-600 group-hover:text-copper-700 text-center leading-tight">Christians for Labor</span>
            </a>
          </div>
          <div className="mt-10 text-center">
             <Link to="/partners" className="text-sm font-medium text-copper-600 hover:text-copper-500">
                View all partners <span aria-hidden="true">&rarr;</span>
             </Link>
          </div>
        </div>
      </section>

      {/* Donate Prompt */}
      <section className="bg-copper-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">Support the mission</h2>
                <p className="mt-2 text-copper-100 max-w-xl">
                    Your donation helps us organize events, create resources, and encourage Christians across Australia to engage in the public square.
                </p>
            </div>
            <Link
                to="/donate"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-copper-700 shadow-sm hover:bg-copper-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                Donate Now
            </Link>
        </div>
      </section>
    </div>
  );
}
