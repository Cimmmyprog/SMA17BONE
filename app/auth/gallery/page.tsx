'use client';

import { useFormState, useFormStatus } from "react-dom";
import { createData } from "@/lib/actionx";
import { useActionState } from "react";

// Bind the server action to make it compatible with useFormState
const clientAction = createData.bind(null);

// Submit Button Component
function SubmitButton({ label = "Submit" }) {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
    >
      {pending ? "Processing..." : label}
    </button>
  );
}

export default function InputComponent() {
  const initialState = null;
  const [state, formAction] = useActionState(clientAction, initialState);

  return (
    <form action={formAction} className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Feedback */}
      {state?.message && (
        <div className="p-4 text-sm text-green-800 bg-green-50 border border-green-200 rounded-md" role="alert">
          <p className="font-medium">{state.message}</p>
        </div>
      )}
      
      {state?.error?.PostId && (
        <div className="p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-md" role="alert">
          <p className="font-medium">Post ID Error: {state.error.PostId}</p>
        </div>
      )}

      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Unggah Gambar & Informasi</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Silakan unggah gambar dan isi detail informasi di bawah ini.
        </p>
      </div>

      {/* Post ID */}
      <div>
        <label htmlFor="PostId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Post ID
        </label>
        <input
          type="text"
          name="PostId"
          id="PostId"
          className="block w-full text-sm border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          required
        />
      </div>

      {/* Upload File */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">
          Upload gambar
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          required
        />
        {state?.error?.image && (
          <p className="text-sm text-red-500 mt-2">{state.error.image}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <SubmitButton label="Upload" />
      </div>
    </form>
  );
}