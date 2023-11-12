"use client";

import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";

const DocumentsPage = () => {
  const create = useMutation(api.documents.create);

  const { user } = useUser();

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        alt="Empty"
        className="dark:hidden"
        height="300"
        src="/empty.png"
        width="300"
      />
      <Image
        alt="Empty"
        className="hidden dark:block"
        height="300"
        src="/empty-dark.png"
        width="300"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
