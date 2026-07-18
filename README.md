import PanelShell from "@/components/PanelShell";

export default function TriagePage() {
  return (
    <PanelShell title="Triage">
      <div className="card max-w-md">
        <p className="text-clinical-900 font-medium mb-1">Triage queue coming next phase</p>
        <p className="text-sm text-clinical-600">
          This route is already protected by auth + role-based access. The live
          patient queue and actions for this panel are built in the next phase.
        </p>
      </div>
    </PanelShell>
  );
}
