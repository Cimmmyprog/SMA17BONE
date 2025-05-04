'use client';

import { SubmitButton } from "@/components/Buttom";
import { Creatdata } from "@/lib/action";
import { useActionState } from "react";

export default function InputComponent() {
  const [state, formAction] = useActionState(Creatdata, null);

  return (
    <form action={formAction} className="max-w-2xl mx-auto p-6 space-y-6">
      {state?.message ?(
        <div
          className="p-4 text-sm text-green-800 bg-green-50 border border-green-200 rounded-md"
          role="alert"
        >
          <p className="font-medium">{state?.message}</p>
        </div>
      ): null}

      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Unggah Gambar & Informasi
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Silakan unggah gambar dan isi detail informasi di bawah ini.
        </p>
      </div>

      {/* Upload File */}
      <div>
        
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload multiple files</label>
<input
  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
  id="multiple_files"
  type="file"
  name="image"
  multiple
/>

        {state?.error?.image && (
          <p className="text-sm text-red-500 mt-2">{state.error.image}</p>
        )}
      </div>

      {/* Input Judul */}
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Judul
        </label>
        <input
          type="text"
          name="title" // corrected from 'titel'
          id="title"
          placeholder="Masukkan judul atau nama file"
          className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>

      {/* Input Deskripsi */}
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Deskripsi
        </label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Masukkan deskripsi tambahan"
          className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        {state?.error?.description && (
          <p className="text-sm text-red-500 mt-2">{state.error.description}</p>
        )}
      </div>

      {/* Tombol Submit */}
      <div className="pt-2">
        <SubmitButton Label="upload" />
      </div>
    </form>
  );
}