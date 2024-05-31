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
    _id: string;
    name: string;
    college: string | null | undefined;
    category: "mentor" | "collaborator" | "international-students" | "student";
    profileImage: string;
    graduationYear: number | null | undefined;
    currentPosition: string;
    linkedIn: string | null | undefined;
    websiteLnk: string | null | undefined;
  };

  type TeachingHighlights = {
    year: number;
    teachings: [
      {
        _id: string;
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

  type TTeachingDetails = {
    _id: string | null | undefined;
    title: string;
    creditPoints: string;
    classLocation: string;
    startDate: Date;
    session: string;
    year: number | null;
    attendancePercentage: string;
    routine: string[];
    courseDescription: string;
    courseObjectives: string[];
    programmeObjectives: string[];
    teachingLearningProccess: string[];
    syllabus: string[];
    referenceBooks: string[];
    prerequisites: string[];
    assignmentInstructions: string;
    gradingPolicy: string[];
    otherResources: string[];
    miscellaneous: string[];
  };

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

  type AchievementType = {
    _id: string;
    statement: string;
    category: AchievementCategory;
    image: string | undefined | null;
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
