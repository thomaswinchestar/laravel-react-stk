import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Index() {
  return (
    <AppLayout>
      <Head title="Tasks" />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        <p>This is the tasks index page.</p>
      </div>
    </AppLayout>
  );
}
