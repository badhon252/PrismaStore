"use client";
import { Modal } from "@/components/ui/modal";
import { Children } from "react";

export default function SetupPage() {
  return (
    <div>
      <Modal title="Setup" description="Setup" isOpen={true} onClose={() => {}}>
        {Children}
      </Modal>
    </div>
  );
}
