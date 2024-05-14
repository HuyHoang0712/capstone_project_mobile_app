import { Redirect, Stack } from 'expo-router';

import { SecureStoreService } from '@/utils/SecureStore.service';
export default function AppLayout() {
  const accessToken = SecureStoreService.getAccessToken();
  
  // You can keep the splash screen open, or render a loading screen like we do here.

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!accessToken) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
}