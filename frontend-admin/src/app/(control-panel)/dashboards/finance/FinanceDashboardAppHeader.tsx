import Typography from '@mui/material/Typography';
import PageBreadcrumb from 'src/components/PageBreadcrumb';

function FinanceDashboardAppHeader() {
  return (
    <div className="flex w-full container">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-6 md:p-8 pb-0 md:pb-0">
        <div className="flex flex-col flex-auto">
          <PageBreadcrumb className="mb-2" />
          <Typography className="text-3xl font-semibold tracking-tight leading-8">
            Panel Financiero
          </Typography>
          <Typography
            className="font-medium tracking-tight"
            color="text.secondary"
          >
            Aquí puedes ver el estado de tus cuentas, presupuestos y
            transacciones recientes.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default FinanceDashboardAppHeader;
