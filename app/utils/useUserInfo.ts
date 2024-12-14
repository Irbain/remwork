import { create } from "zustand";

type NotificationSettings = {
  activityEmail: boolean;
  socialEmail: boolean;
  marketingEmail: boolean;
};

type SocialSettings = {
  personalWebsite: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
};

type UserInfoState = {
  username: string;
  usernameLastUpdate: number;
  email: string;
  description: string;
  fullName: string;
  birthday: Date;
  languages: string;
  favoriteJobs: string[];
  socialMedia: SocialSettings;
  theme: string;
  notification: NotificationSettings;
  display: string[];
  setUsername: (username: string) => void;
  setUsernameLastUpdate: (usernameLastUpdate: number) => void;
  setEmail: (email: string) => void;
  setDescription: (description: string) => void;
  setFullName: (fullName: string) => void;
  setBirthday: (birthday: Date) => void;
  setLanguages: (languages: string) => void;
  setFavoriteJobs: (favoriteJobs: string[]) => void;
  setSocialMedia: (social: Partial<SocialSettings>) => void;
  setTheme: (theme: string) => void;
  setNotification: (notification: Partial<NotificationSettings>) => void;
  setDisplay: (display: string[]) => void;
  deleteProfile: () => void;
};

export const useUserInfo = create<UserInfoState>((set) => ({
  username: "",
  usernameLastUpdate: Date.now(),
  email: "",
  description: "",
  fullName: "",
  birthday: new Date("1900-01-01"),
  languages: "",
  favoriteJobs: [],
  socialMedia: {
    personalWebsite: "https://example.com",
    githubUrl: "https://github.com/username",
    linkedinUrl: "https://linkedin.com/in/username",
    twitterUrl: "https://twitter.com/username",
  },
  theme: "",
  notification: {
    activityEmail: true,
    socialEmail: false,
    marketingEmail: false,
  },
  display: ["Email", "Occupation"],
  setUsername: (username) => set({ username }),
  setUsernameLastUpdate: (usernameLastUpdate) => set({ usernameLastUpdate }),
  setEmail: (email) => set({ email }),
  setDescription: (description) => set({ description }),
  setFullName: (fullName) => set({ fullName }),
  setBirthday: (birthday) => set({ birthday }),
  setLanguages: (languages) => set({ languages }),
  setFavoriteJobs: (favoriteJobs) => set({ favoriteJobs }),
  setSocialMedia: (socialMedia: Partial<SocialSettings>) =>
    set((state) => ({
      socialMedia: { ...state.socialMedia, ...socialMedia },
    })),
  setTheme: (theme) => set({ theme }),
  setNotification: (notification: Partial<NotificationSettings>) =>
    set((state) => ({
      notification: { ...state.notification, ...notification },
    })),
  setDisplay: (display) => set({ display }),
  deleteProfile: () =>
    set({
      username: "",
      usernameLastUpdate: 0,
      email: "",
      description: "",
      fullName: "",
      birthday: new Date("1900-01-01"),
      languages: "",
      favoriteJobs: [],
      socialMedia: {
        personalWebsite: "",
        githubUrl: "",
        linkedinUrl: "",
        twitterUrl: "",
      },
      theme: "",
      notification: {
        activityEmail: true,
        socialEmail: false,
        marketingEmail: false,
      },
      display: ["Email", "Occupation"],
    }),
}));
