"use client";

import { useMutation } from "convex/react";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";

interface CoverProps {
  preview?: boolean;
  url?: string;
}

export const Cover = ({ preview, url }: CoverProps) => {
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const coverImage = useCoverImage();

  const params = useParams();

  const { edgestore } = useEdgeStore();

  const onRemove = async () => {
    if (url) await edgestore.publicFiles.delete({ url });

    removeCoverImage({ id: params.documentId as Id<"documents"> });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image alt="Cover" className="object-cover" fill src={url} />}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            className="text-muted-foreground text-xs"
            onClick={() => coverImage.onReplace(url)}
            size="sm"
            variant="outline"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            className="text-muted-foreground text-xs"
            onClick={onRemove}
            size="sm"
            variant="outline"
          >
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="w-full h-[12vh]" />;
};
