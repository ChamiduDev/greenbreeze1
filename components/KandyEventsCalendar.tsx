"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek, isToday } from "date-fns";
import { Event, EventType } from "@/types/events";
import { fetchEventsFromGoogleSheet } from "@/lib/googleSheets";

type ViewMode = "monthly" | "daily";

interface KandyEventsCalendarProps {
  sheetId?: string;
  gid?: string;
}

export default function KandyEventsCalendar({ 
  sheetId, 
  gid = "0" 
}: KandyEventsCalendarProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("monthly");
  const [filterType, setFilterType] = useState<EventType | "All">("All");

  const googleSheetId = sheetId || process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

  useEffect(() => {
    if (!googleSheetId) {
      setError("Google Sheet ID is not configured. Please set NEXT_PUBLIC_GOOGLE_SHEET_ID in your environment variables.");
      setLoading(false);
      return;
    }

    const loadEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedEvents = await fetchEventsFromGoogleSheet(googleSheetId, gid);
        setEvents(fetchedEvents);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load events");
        console.error("Error loading events:", err);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [googleSheetId, gid]);

  const getEventsForDate = (date: Date): Event[] => {
    const dateEvents: Event[] = [];
    
    // Separate "All Day" events from regular events
    const allDayEvents = events.filter(event => event.type === "All Day");
    const regularEvents = events.filter(event => event.type !== "All Day");
    
    // Add regular events that match the date
    const matchingRegularEvents = regularEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return isSameDay(eventDate, date);
    });
    dateEvents.push(...matchingRegularEvents);
    
    // Always add "All Day" events (they appear on every day)
    dateEvents.push(...allDayEvents);
    
    // Apply filter
    if (filterType === "All") {
      return dateEvents;
    } else if (filterType === "All Day") {
      return allDayEvents;
    } else {
      return dateEvents.filter(event => event.type === filterType);
    }
  };

  const getMonthlyEvents = (): Event[] => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    
    // Separate "All Day" events from regular events
    const allDayEvents = events.filter(event => event.type === "All Day");
    const regularEvents = events.filter(event => event.type !== "All Day");
    
    const monthEvents: Event[] = [];
    
    // Add regular events in the month
    const matchingRegularEvents = regularEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= monthStart && eventDate <= monthEnd;
    });
    monthEvents.push(...matchingRegularEvents);
    
    // Always include "All Day" events (they appear every month)
    monthEvents.push(...allDayEvents);
    
    // Apply filter
    if (filterType === "All") {
      return monthEvents;
    } else if (filterType === "All Day") {
      return allDayEvents;
    } else {
      return monthEvents.filter(event => event.type === filterType);
    }
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setViewMode("daily");
  };

  const dailyEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  if (loading) {
    return (
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-white to-brand-sand">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-brand-primary border-t-transparent"></div>
            <p className="mt-4 text-brand-primary font-playfair">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events-calendar" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-white to-brand-sand overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-brand-secondary/15 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-secondary uppercase tracking-[0.4em] text-xs sm:text-sm mb-4">
            Kandy Events
          </p>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-brand-primary mb-4">
            Daily & Monthly Events Calendar
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-playfair">
            Discover the vibrant cultural events and celebrations happening in Kandy throughout the year.
          </p>
        </motion.div>

        {error && (
          <motion.div
            className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-playfair">{error}</p>
            {!googleSheetId && (
              <p className="text-sm mt-2">
                Please configure NEXT_PUBLIC_GOOGLE_SHEET_ID in your .env.local file.
              </p>
            )}
          </motion.div>
        )}

        {/* View Mode Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-1 border border-brand-secondary/30">
            <button
              onClick={() => setViewMode("monthly")}
              className={`px-6 py-2 rounded-full font-playfair transition-all ${
                viewMode === "monthly"
                  ? "bg-brand-primary text-white shadow-lg"
                  : "text-brand-primary hover:bg-brand-secondary/10"
              }`}
            >
              Monthly View
            </button>
            <button
              onClick={() => setViewMode("daily")}
              className={`px-6 py-2 rounded-full font-playfair transition-all ${
                viewMode === "daily"
                  ? "bg-brand-primary text-white shadow-lg"
                  : "text-brand-primary hover:bg-brand-secondary/10"
              }`}
            >
              Daily View
            </button>
          </div>

          {/* Filter Toggle */}
          <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-1 border border-brand-secondary/30">
            {(["All", "Daily", "Monthly", "All Day"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-full font-playfair text-sm transition-all ${
                  filterType === type
                    ? "bg-brand-accent text-white shadow-lg"
                    : "text-brand-primary hover:bg-brand-secondary/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Monthly View */}
        {viewMode === "monthly" && (
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl border border-brand-secondary/30 shadow-[0_25px_60px_rgba(10,35,66,0.12)] p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                className="p-2 rounded-full hover:bg-brand-secondary/10 text-brand-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-primary">
                {format(currentDate, "MMMM yyyy")}
              </h3>
              <button
                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                className="p-2 rounded-full hover:bg-brand-secondary/10 text-brand-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Week Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-playfair font-semibold text-brand-secondary uppercase tracking-wider py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, idx) => {
                const dayEvents = getEventsForDate(day);
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isCurrentDay = isToday(day);
                const hasEvents = dayEvents.length > 0;

                return (
                  <button
                    key={idx}
                    onClick={() => handleDateClick(day)}
                    className={`relative p-2 sm:p-3 rounded-lg transition-all min-h-[60px] sm:min-h-[80px] ${
                      !isCurrentMonth
                        ? "text-gray-300"
                        : isCurrentDay
                        ? "bg-brand-accent/20 text-brand-primary font-semibold border-2 border-brand-accent"
                        : hasEvents
                        ? "bg-brand-secondary/10 text-brand-primary hover:bg-brand-secondary/20 border border-brand-secondary/30"
                        : "text-brand-primary hover:bg-brand-sand"
                    }`}
                  >
                    <span className="text-sm sm:text-base">{format(day, "d")}</span>
                    {hasEvents && isCurrentMonth && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                        {dayEvents.slice(0, 3).map((event, eventIdx) => (
                          <div
                            key={eventIdx}
                            className={`w-1.5 h-1.5 rounded-full ${
                              event.type === "Daily" 
                                ? "bg-brand-primary" 
                                : event.type === "All Day"
                                ? "bg-green-500"
                                : "bg-brand-accent"
                            }`}
                          />
                        ))}
                        {dayEvents.length > 3 && (
                          <span className="text-xs text-brand-secondary">+{dayEvents.length - 3}</span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Events Summary */}
            {getMonthlyEvents().length > 0 && (
              <div className="mt-6 pt-6 border-t border-brand-secondary/30">
                <p className="text-sm text-brand-secondary font-playfair mb-3">
                  {getMonthlyEvents().length} event{getMonthlyEvents().length !== 1 ? "s" : ""} this month
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Daily View */}
        {viewMode === "daily" && (
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl border border-brand-secondary/30 shadow-[0_25px_60px_rgba(10,35,66,0.12)] p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Date Selector */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => {
                  const newDate = new Date(selectedDate || currentDate);
                  newDate.setDate(newDate.getDate() - 1);
                  setSelectedDate(newDate);
                }}
                className="p-2 rounded-full hover:bg-brand-secondary/10 text-brand-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-brand-primary">
                  {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : format(currentDate, "EEEE, MMMM d, yyyy")}
                </h3>
                {!selectedDate && (
                  <button
                    onClick={() => setSelectedDate(new Date())}
                    className="text-sm text-brand-secondary hover:text-brand-primary mt-1 font-playfair"
                  >
                    Select a date
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  const newDate = new Date(selectedDate || currentDate);
                  newDate.setDate(newDate.getDate() + 1);
                  setSelectedDate(newDate);
                }}
                className="p-2 rounded-full hover:bg-brand-secondary/10 text-brand-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Events List */}
            {selectedDate ? (
              dailyEvents.length > 0 ? (
                <div className="space-y-4">
                  {dailyEvents.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-4 rounded-xl border border-brand-secondary/30 bg-gradient-to-r from-brand-white to-brand-sand/50 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-playfair font-semibold ${
                                event.type === "Daily"
                                  ? "bg-brand-primary text-white"
                                  : event.type === "All Day"
                                  ? "bg-green-500 text-white"
                                  : "bg-brand-accent text-white"
                              }`}
                            >
                              {event.type}
                            </span>
                            {event.time && (
                              <span className="text-sm text-brand-secondary font-playfair">
                                {event.time}
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-playfair font-bold text-brand-primary mb-1">
                            {event.eventName}
                          </h4>
                          {event.description && (
                            <p className="text-gray-600 font-playfair">{event.description}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 font-playfair text-lg">
                    No events scheduled for this date.
                  </p>
                  <p className="text-sm text-gray-400 mt-2 font-playfair">
                    Try selecting a different date or changing the filter.
                  </p>
                </div>
              )
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 font-playfair text-lg">
                  Select a date from the monthly view or use the navigation arrows above.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

