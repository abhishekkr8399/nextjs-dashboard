import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
 
export const metadata: Metadata = {
  title: 'Create Invoice',
};
 
export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CreateInvoiceForm />
      </Suspense>
    </main>
  );
}

async function CreateInvoiceForm() {
  const customers = await fetchCustomers();
  return <Form customers={customers} />;
}