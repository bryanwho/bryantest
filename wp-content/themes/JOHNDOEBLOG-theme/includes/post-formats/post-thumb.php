<?php if(!is_singular()) : ?>

	<?php $post_image_size = of_get_option('post_image_size'); ?>
	<?php if($post_image_size=='' || $post_image_size=='normal'){ ?>
		<?php if(has_post_thumbnail()) { ?>
			<div class="featured-thumbnail thumbnail norm"><a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('medium'); ?></a></div>
		<?php } ?>
	<?php } else { ?>
		<?php if(has_post_thumbnail()) { ?>
				<figure class="featured-thumbnail thumbnail large">
				<div class="hider-page"></div>
				<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
				<?php the_post_thumbnail( 'standard-large' ); ?> 
				</a>
				</figure>
		<?php } ?>
	<?php } ?>

<?php else :?>

<?php $single_image_size = of_get_option('single_image_size'); ?>
<?php if ($single_image_size == '' || $single_image_size == 'normal'){ ?>
	<?php if(has_post_thumbnail()) { ?>
		<div class="featured-thumbnail thumbnail norm"><?php the_post_thumbnail('medium'); ?></div>
	<?php } ?>
<?php } else { ?>
	<?php if(has_post_thumbnail()) { ?>

<figure class="featured-thumbnail thumbnail large">
				<div class="hider-page"></div>
				<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
				<?php the_post_thumbnail( 'standard-large' ); ?> 
				</a>
				</figure>
	<?php } ?>
<?php } ?>

<?php endif; ?>