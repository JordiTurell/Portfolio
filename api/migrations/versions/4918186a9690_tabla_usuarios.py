"""tabla usuarios

Revision ID: 4918186a9690
Revises: 
Create Date: 2023-11-01 13:09:51.791945

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4918186a9690'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('usuario',
    sa.Column('id', sa.String(length=36), nullable=False),
    sa.Column('nickname', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('imagen', sa.LargeBinary(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('usuario')
    # ### end Alembic commands ###
