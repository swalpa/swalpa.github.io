import { Profile } from "next-auth";
import {
  TeamMemberCategory,
  ProfileCategory,
  PublicationCategory,
  AchievementCategory,
  ProjectCategory,
} from "./enums.";
import { type } from "os";

export {};
declare global {
  type updateType = {
    _id: string;
    title: string;
    featured: boolean;
    date: number | string;
  };

  type UpdateAndGoogleScholarStats = {
    updates: updateType[];
    stats: {
      citations: { all: number; since_2018: number };
      h_index: { all: number; since_2018: number };
      i10_index: { all: number; since_2018: number };
      citationsGraph: { year: number; citations: number }[];
      updatedAt: Date;
    };
  };

  type TTeamMember = {
    id: string;
    name: string;
    category:
      | "mentor"
      | "collaborator"
      | "international-student"
      | "domestic-student";
    college: string | null;
    image: string;
    graduation: string | null;
    description: string | null;
    linkedIn: string | null;
    website: string | null;
    github: string | null;
    googleScholar: string | null;
  };

  type TTeachings = {
    year: number;
    teachings: [
      {
        id: string;
        title: string;
        startDate: Date;
        year: number;
      }
    ];
  };

  type TNews = {
    id: string;
    title: string;
    date: Date;
    featured: boolean;
  };

  interface TFullTeachingDetails {
    id: string;
    title: string;
    creditPoints: string;
    start: number;
    session: string;
    year: number;
    minAttendance: string;
    class: string;
    routine: { data: string }[];
    description: string;
    courseObjectives: { data: string }[];
    programmeObjectives: { data: string }[];
    learningProcess: { data: string }[];
    syllabus: { data: string }[];
    references: { data: string }[];
    prerequisites: { data: string }[];
    assignment: string;
    grading: { data: string }[];
    resouces: { data: string }[];
    miscellaneous: { data: string }[];
  }

  type InternshipsHighlights = {
    _id: string;
    title: string;
    summary: string;
    open: boolean;
  };

  type Profiles = {
    name: string;
    email?: string;
    profileImage?: string | File[];
    website?: string;
    linkedIn?: string;
  };

  type InternshipProfile = {
    _id?: string;
    name: string;
    profileImage: string;
    highlightedText: string;
    college: string | null | undefined;
    linkedIn: string | null | null;
    website: string | null | undefined;
    currentPosition: string | null | undefined;
    internshipTopic: string | null | undefined;
    collegeTier: boolean | null | undefined;
    category: ProfileCategory;
  };

  type InternshipDetails = {
    _id: string;
    description: string;
    topics: string[];
    timeline: { task: string; tentativeTimeline: string }[];
    eligibility: string[];
    selectionProcedure: string[];
    applicationProcess: string;
    open: boolean;
    applicationLink: string;
    faq: { question: string; answer: string }[];
  };

  type InternshipDetailsWithProfiles = InternshipDetails & {
    profiles: InternshipProfile[];
  };

  type Publication = {
    _id: string;
    title: string;
    paperLink: string;
    authors: string;
    year: number;
    category: PublicationCategory;
    links: { name: string; link: string }[];
    publisher: string;
    highlighted: boolean | null | undefined;
    serialNumber?: string;
    createdAt: Date;
  };

  type User = {
    name: string;
    email: string;
  };

  type LoginType = {
    email: string;
    password: string;
  };

  type TAchievements = {
    id: string;
    random: number | null;
    category: "international" | "national" | "academy";
    image: string | null;
    description: string;
    year: number;
  };
  type PI_Type = {
    name: string;
    designation: string;
  };

  type ProjectType = {
    _id: string;
    title: string;
    PI: PI_Type | null | undefined;
    CoPI_1: PI_Type | null | undefined;
    CoPI_2: PI_Type | null | undefined;
    description: string;
    image: string;
    links: { name: string; value: string }[];
    informations: { name: string; value: string }[];
    category: ProjectCategory;
  };
}
