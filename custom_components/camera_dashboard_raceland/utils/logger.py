"""Custom logger for Camera Dashboard Raceland."""
import logging

from ..const import PACKAGE_NAME

_DashboardLogger: logging.Logger = logging.getLogger(PACKAGE_NAME)


def get_logger() -> logging.Logger:
    """Return a Logger instance."""
    return _DashboardLogger
