"use client"

import { NextRequest } from "next/server";
import { createClient } from "../supabase/client";

export const supabase = createClient()

// Sign in with Google
export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (error) console.log('Error logging in with Google:', error.message);
};

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log('Error signing out:', error.message);
  
  if(!error) {
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }
};