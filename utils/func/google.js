"use client"

import { createClient } from "../supabase/client";
import { redirect } from "next/navigation";

export const supabase = createClient()

// Sign in with Google
export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  
  if (error)
  redirect('/error')

  redirect('/')
};

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) redirect('/error')
};