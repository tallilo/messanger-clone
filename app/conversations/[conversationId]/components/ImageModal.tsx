"use client";
import Modal from "@/app/components/Modal";
import React from "react";
import Image from "next/image";
interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src: string | null;
}

export default function ImageModal({ isOpen, onClose, src }: ImageModalProps) {
  if (!src) {
    return null;
  }
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="w-80 h-80">
        <Image fill alt="image" className="object-cover" src={src} />
      </div>
    </Modal>
  );
}
