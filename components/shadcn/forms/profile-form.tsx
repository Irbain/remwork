"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
//import { useUserInfo } from "@/app/utils/useUserInfo";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Globe } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SettingsSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
import { settings } from "@/actions/settings";
import { useSession } from "next-auth/react";

// const profileFormSchema = z.object({
//   username: z
//     .string()
//     .min(3, {
//       message: "Username must be at least 3 characters.",
//     })
//     .max(30, {
//       message: "Username must not be longer than 30 characters.",
//     }),
//   email: z
//     .string({
//       required_error: "Please select an email to display.",
//     })
//     .email(),
//   bio: z.string().max(160).min(4),
//   twitterUrl: z
//     .string()
//     .url({ message: "Please enter a valid URL." })
//     .optional(),
//   linkedinUrl: z
//     .string()
//     .url({ message: "Please enter a valid URL." })
//     .optional(),
//   githubUrl: z
//     .string()
//     .url({ message: "Please enter a valid URL." })
//     .optional(),
//   personalWebsite: z
//     .string()
//     .url({ message: "Please enter a valid URL." })
//     .optional(),
//   lastUpdate: z.number().optional(),
// });

type ProfileFormValues = z.infer<typeof SettingsSchema>;

export function ProfileForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const user = useCurrentUser();
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();

  const defaultValues: Partial<ProfileFormValues> = {
    bio: "description",
    name: user?.name || "",
    password: undefined,
    newPassword: undefined,
    email: user?.email || undefined,
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(SettingsSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    startTransition(() => {
      settings(data)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            session.update();
            setSuccess(data.success);
          }
        })
        .catch(() => {
          "Something went wrong!";
        });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  className=""
                  placeholder="name"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {user?.isOAuth === false && (
          <>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <Input
                      disabled={isPending}
                      className=""
                      placeholder="email"
                      {...field}
                    />
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <Input
                      disabled={isPending}
                      className=""
                      placeholder="******"
                      {...field}
                    />
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <Input
                      disabled={isPending}
                      className=""
                      placeholder="******"
                      {...field}
                    />
                  </Select>
                </FormItem>
              )}
            />
          </>
        )}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormField
            control={form.control}
            name="personalWebsite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URLS</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4 text-black" />

                    <Input
                      disabled={isPending}
                      className=""
                      placeholder="https://example.com"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">GitHub URL</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <GitHubLogoIcon className="mr-2 h-4 w-4 text-[#24292e]" />
                    <Input
                      disabled={isPending}
                      className=""
                      placeholder="https://github.com/username"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedinUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">LinkedIn URL</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <LinkedInLogoIcon className="mr-2 h-4 w-4 text-[#0077B5]" />
                    <Input
                      disabled={isPending}
                      className=""
                      placeholder="https://linkedin.com/in/username"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twitterUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Twitter URL</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <TwitterLogoIcon className="mr-2 h-4 w-4 text-[#1DA1F2]" />
                    <Input
                      disabled={isPending}
                      className=""
                      placeholder="https://twitter.com/username"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />

        <Button disabled={isPending} type="submit">
          Update profile
        </Button>
      </form>
    </Form>
  );
}
